import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, FlexboxGrid, Progress, Tag, Input, InputGroup, Icon, Button, Container, Loader } from 'rsuite';



const ProgressCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell placement="start" {...props} style={{ padding: 0, height: '100%' }}>
        <FlexboxGrid align="middle" style={{ padding: 0, height: '100%', marginRight: '36px'}}>
            <Progress.Line percent={rowData[dataKey]} strokeColor={rowData[dataKey] < 75 ? '#4caf50' : rowData[dataKey] > 75 && rowData[dataKey] < 100 ? '#ffc107' : "#f44336" } />
        </FlexboxGrid>
    </Table.Cell>
);
const StatusCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell placement="center" {...props} style={{ padding: 0, height: '100%' }}>
        <FlexboxGrid justify="start" style={{ padding: '10px', height: '100%' }}>
            <Tag color={rowData[dataKey] ? 'red' : 'green'}>{rowData[dataKey] ? 'Busy' : 'Free'}</Tag>
        </FlexboxGrid>
    </Table.Cell>
);
const NotificationCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell placement="center" {...props} style={{ padding: 0, height: '100%' }}>
        <FlexboxGrid justify="start" style={{ padding: '10px', height: '100%' }}>
            <Button appearance="subtle" color="orange" style={{ marginTop: '-4px'}}>Get Notified</Button>
        </FlexboxGrid>
    </Table.Cell>
);




export default function CoWorkers() {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [coWorkers, setCoWorkers] = useState([])

    const handleChangePage = (dataKey) =>{
        setPage(dataKey)
    }

    const getData = (items) => {
        const start = 10*page - 10;
        const end = 10*page - 1;
        let newItems = items.filter((item, i) => {return i >= start && i <= end});
        return newItems
    }
   
    const getCoWorkers = () => {
        setLoading(true)
        axios.get('/co-workers')
            .then((coWorkers) => {
                //Filters out users that are not supposed to be in the list.
                //This needs to be  done because Jira categorizes users and apps as the same thing. (Not sure why)
                let filteredCoWorkers = coWorkers.data.filter(person => person.accountType === "atlassian")
                mergeData(filteredCoWorkers);
                
            })
            .catch(err => console.log(err));
        
    }

    const calculateWorkload = async (userId) => {
        const resp = await axios.get(`/co-workers/get-workload/${userId}`)
            .then((allIssues) => {
                let worktime = 0;
                let est = 0;
                let spt = 0;
                if(allIssues.data.issues.length > 0){
                    for(let i = 0; i < allIssues.data.issues.length; i++){
                        if(allIssues.data.issues[i].fields.aggregateprogress.total !== null){
                            // 648000 Seconds = 180 hours => Dividing by 6480 to convert to percent
                            est = allIssues.data.issues[i].fields.aggregateprogress.total
                        } else {
                            est = 0;
                        }
                        if(allIssues.data.issues[i].fields.aggregateprogress.progress !== null){
                            // 648000 Seconds = 180 hours => Dividing by 6480 to convert to percent
                            spt = allIssues.data.issues[i].fields.aggregateprogress.progress
                        } else {
                            spt = 0;
                        }
                        if(est > spt){
                            worktime = worktime + est;
                        } else {
                            worktime = worktime + spt;
                        }
                    }
                    
                    return Math.round(worktime / 6480);
                    
                } else {
                    return 0;
                }
            })
            .catch(err => console.log(err))
        return resp;
    }

    const mergeData = async (atlassianData) => {
        let mergedData = [];
        for(let i = 0; i < atlassianData.length; i++){
            let person = atlassianData[i];
            let workload = await calculateWorkload(person.accountId);
            let newPerson = {};
            newPerson.name = person.displayName;
            //newPerson.status = database.status
            newPerson.workload = workload;
            //newPerson.message = database.message
            mergedData.push(newPerson);
        };
        setCoWorkers(mergedData);
        setLoading(false)
    }

    useEffect(() => {
        getCoWorkers();
    },[])

    return (
        <Container className="container">
            <FlexboxGrid justify="space-between" align="middle">
                <FlexboxGrid.Item colspan={18}>
                    <FlexboxGrid justify="start"  align="middle">
                        <h3>Co-Workers</h3>
                        <div className="search">
                            <InputGroup size="md">
                                <Input />
                                <InputGroup.Button>
                                    <Icon icon="search" />
                                </InputGroup.Button>
                            </InputGroup>
                        </div>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item colspan={6}>
                    <FlexboxGrid justify="end">
                        <Button className="button-margin-right button-shadow" color="orange">Table View</Button>
                        <Button className="button-shadow">Card View</Button>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <div className="card">
                <Table autoHeight affixHeader affixHorizontalScrollbar loading={loading} data={getData(coWorkers)}>
                    <Table.Column width={240} justify="start" resizable>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.Cell dataKey="name" />
                    </Table.Column>

                    <Table.Column width={120} justify="start" resizable>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <StatusCell dataKey="busyStatus"/>
                    </Table.Column>
                    
                    <Table.Column width={240} justify="start" resizable>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.Cell dataKey="jobTitle" />
                    </Table.Column>

                    <Table.Column width={360} justify="start" resizable>
                        <Table.HeaderCell>Workload</Table.HeaderCell>
                        <ProgressCell dataKey="workload"/>
                    </Table.Column>

                    <Table.Column width={480} justify="start" resizable>
                        <Table.HeaderCell>Message</Table.HeaderCell>
                        <Table.Cell dataKey="message" />
                    </Table.Column>

                     <Table.Column width={480} justify="start" resizable>
                        <Table.HeaderCell>Request Notification</Table.HeaderCell>
                        <NotificationCell dataKey="name" />
                    </Table.Column>
                    
                </Table>
                <Table.Pagination
                    activePage={page}
                    displayLength={10}
                    total={coWorkers.length}
                    onChangePage={handleChangePage}
                />
            </div>
            <Button onClick={getCoWorkers} className="button-shadow" color="orange">Get Co-Workers</Button>
        </Container>
    )
}
