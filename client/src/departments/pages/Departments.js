import React, { useState } from 'react'
import { Table, FlexboxGrid, Progress, Tag, Input, InputGroup, Icon, Button, Avatar, Container } from 'rsuite';


const Departments = () => {

    const ProgressCell = ({ rowData, dataKey, ...props }) => (
        <Table.Cell placement="start" {...props} style={{ padding: 0, height: '100%' }}>
            <FlexboxGrid align="center" style={{ padding: 0, height: '100%', marginRight: '36px'}}>
                <Progress.Line percent={rowData[dataKey]} strokeColor={rowData[dataKey] < 75 ? '#4caf50' : rowData[dataKey] > 75 && rowData[dataKey] < 100 ? '#ffc107' : "#f44336" } />
            </FlexboxGrid>
        </Table.Cell>
    );
    const MembersCell = ({ rowData, dataKey, ...props }) => (
        
        <Table.Cell placement="center" {...props} style={{ padding: 0, height: '100%' }}>
            <FlexboxGrid align="start" style={{ padding: '10px', height: '100%' }}>
                <div className="avatar-group">
                     {
                    rowData.members.map(member => 
                        <Avatar size="sm" className="avatar-margin avatar-color">{member}</Avatar>
                    )
                }
                
                </div>
            </FlexboxGrid>
        </Table.Cell>
    );
    
    const fakeData =[
                    {"departmentName": 'Front-end Development', "members": ["MG", "TL", "AP"], "currentGoal": "Complete coding the UI", 'workload': 175},
                    {"departmentName": 'Back-end Development', "members": ["TS", "TL"], "currentGoal": "Update the database", 'workload': 40},
                    {"departmentName": 'Design', "members": ["TS"], "currentGoal": "Finish new design for application", 'workload': 80},
                    {"departmentName": 'Marketing', "members": ["AP", "TL"], "currentGoal": "Create a new marketing tragedy", 'workload': 20},
                    ];
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [departments, setDepartments] = useState(fakeData);

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
       <Container className="container">
            <FlexboxGrid justify="space-between" align="middle">
                <FlexboxGrid.Item colspan={18}>
                    <FlexboxGrid justify="start"  align="middle">
                        <h3>Departments</h3>
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
                        <Button className="button-shadow" color="white">Card View</Button>
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
            <div className="card">
                <Table autoHeight affixHeader affixHorizontalScrollbar data={getData(departments)}>
                    <Table.Column width={240} align="start" resizable>
                        <Table.HeaderCell>Department</Table.HeaderCell>
                        <Table.Cell dataKey="departmentName" />
                    </Table.Column>

                    <Table.Column width={240} align="start" resizable>
                        <Table.HeaderCell>Members</Table.HeaderCell>
                        <MembersCell dataKey="members"/>
                    </Table.Column>

                    <Table.Column width={360} align="start" resizable>
                        <Table.HeaderCell>Current Goal</Table.HeaderCell>
                        <Table.Cell dataKey="currentGoal" />
                    </Table.Column>

                    <Table.Column width={360} align="start" resizable>
                        <Table.HeaderCell>Workload</Table.HeaderCell>
                        <ProgressCell dataKey="workload"/>
                    </Table.Column>
                    
                </Table>
                <Table.Pagination
                    activePage={page}
                    displayLength={10}
                    total={departments.length}
                    onChangePage={handleChangePage}
                />
            </div>
            <FlexboxGrid justify="end" align="top">
                <Button className="button-margin-top button-shadow" color="orange">Add New Department</Button>
            </FlexboxGrid>
            
        </Container>
    )
}

export default Departments;
