import React, { useState } from 'react'
import { Table, FlexboxGrid, Progress, Tag, Input, InputGroup, Icon, Button } from 'rsuite';



const ProgressCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell placement="start" {...props} style={{ padding: 0, height: '100%' }}>
        <FlexboxGrid align="center" style={{ padding: 0, height: '100%', marginRight: '36px'}}>
            <Progress.Line percent={rowData[dataKey]} strokeColor="#ffc107" />
        </FlexboxGrid>
    </Table.Cell>
);
const StatusCell = ({ rowData, dataKey, ...props }) => (
    <Table.Cell placement="center" {...props} style={{ padding: 0, height: '100%' }}>
        <FlexboxGrid align="start" style={{ padding: '10px', height: '100%' }}>
            <Tag color={rowData[dataKey] ? 'red' : 'green'}>{rowData[dataKey] ? 'Busy' : 'Free'}</Tag>
        </FlexboxGrid>
    </Table.Cell>
);




export default function CoWorkers() {

    const fakeData =[
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Tomas Sedurskas', "busyStatus": false, "jobTitle": 'User Interface Designer', 'workload': 65, "currentTask": "Some task for design", 'message': ""},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Tomas Sedurskas', "busyStatus": false, "jobTitle": 'User Interface Designer', 'workload': 65, "currentTask": "Some task for design", 'message': ""},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Tomas Sedurskas', "busyStatus": false, "jobTitle": 'User Interface Designer', 'workload': 65, "currentTask": "Some task for design", 'message': ""},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Tomas Sedurskas', "busyStatus": false, "jobTitle": 'User Interface Designer', 'workload': 65, "currentTask": "Some task for design", 'message': ""},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Tomas Sedurskas', "busyStatus": false, "jobTitle": 'User Interface Designer', 'workload': 65, "currentTask": "Some task for design", 'message': ""},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Tomas Sedurskas', "busyStatus": false, "jobTitle": 'User Interface Designer', 'workload': 65, "currentTask": "Some task for design", 'message': ""},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Tomas Sedurskas', "busyStatus": false, "jobTitle": 'User Interface Designer', 'workload': 65, "currentTask": "Some task for design", 'message': ""},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Maria Aldis Gardarsdottir', "busyStatus": true, "jobTitle": 'Front-end Developer', 'workload': 75, "currentTask": "Some task for front-end", 'message': "I am leaving from this week. I will be back on the 24th of January"},
                    {"name": 'Tomas Sedurskas', "busyStatus": false, "jobTitle": 'User Interface Designer', 'workload': 65, "currentTask": "Some task for design", 'message': ""}
                    ];
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [users, setUser] = useState(fakeData);

    const handleChangePage = (dataKey) =>{
        setPage(dataKey)
    }

    const getData = (items) => {
        const start = 10*page - 10;
        const end = 10*page - 1;
        let newItems = items.filter((item, i) => {return i >= start && i <= end});
        return newItems
    }


    return (
        <div className="show-grid">
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
                        <Button className="button-margin-right" color="orange">Table View</Button>
                        <Button>Card View</Button>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <div className="card">
                <Table autoHeight affixHeader affixHorizontalScrollbar data={getData(users)}>
                    <Table.Column width={240} align="start" resizable>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.Cell dataKey="name" />
                    </Table.Column>

                    <Table.Column width={120} align="start" resizable>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                        <StatusCell dataKey="busyStatus"/>
                    </Table.Column>

                    <Table.Column width={240} align="start" resizable>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.Cell dataKey="jobTitle" />
                    </Table.Column>

                    <Table.Column width={360} align="start" resizable>
                        <Table.HeaderCell>Workload</Table.HeaderCell>
                        <ProgressCell dataKey="workload"/>
                    </Table.Column>

                    <Table.Column width={360} align="start" resizable>
                        <Table.HeaderCell>Current Task</Table.HeaderCell>
                        <Table.Cell dataKey="currentTask" />
                    </Table.Column>


                    <Table.Column width={480} align="start" resizable>
                        <Table.HeaderCell>Message</Table.HeaderCell>
                        <Table.Cell dataKey="message" />
                    </Table.Column>
                    
                </Table>
                <Table.Pagination
                    activePage={page}
                    displayLength={10}
                    total={users.length}
                    onChangePage={handleChangePage}
                />
            </div>
        </div>
    )
}
