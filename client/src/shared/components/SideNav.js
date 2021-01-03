import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react'; 

import './SideNav.scss';
import { Sidenav, Nav, Icon } from 'rsuite';

const SideNav = props => {
    const [expanded, setExpanded] = useState(false);
    const [menuWidth, setMenuWidth] = useState(56);
    const [currentKey, setCurrentKey] = useState("1");

    const burgerClicked = () => {
        setExpanded(!expanded);
        if(expanded){
            setMenuWidth(56);
        }else{
            setMenuWidth(250);
        }
    }

    const history = useHistory();

    const navItemSelected = (eventKey) => {
        console.log(currentKey);
        setCurrentKey(eventKey);
        switch(eventKey) {
            case "1":
                history.push("/");
              break;
            case "2":
                history.push("/widget-builder");
              break;
            case "3":
                history.push("/co-workers");
              break;
            case "4":
                history.push("/departments");
              break;
            case "5":
                history.push("/settings");
              break;
            default:
              history.push("/");
          }
        
    }

    let burgerOpen = <svg width="28" height="28" viewBox="0 0 32 32">
        <path id="Path_18" data-name="Path 18" d="M6,0H26a6,6,0,0,1,6,6V26a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" fill="#37474f"/>
        <g id="Group_196" data-name="Group 196" transform="translate(-17.002 -8.5)">
        <path id="Path_34" data-name="Path 34" d="M0,0H12" transform="translate(27.002 20.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
        <path id="Path_33" data-name="Path 33" d="M0,0H12" transform="translate(27.002 28.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
        </g>
    </svg>
  
    let burgerClose = <svg width="28" height="28" viewBox="0 0 32 32">
        <g id="Group_442" transform="translate(-19 -13)">
        <path id="Path_18" d="M6,0H26a6,6,0,0,1,6,6V26a6,6,0,0,1-6,6H6a6,6,0,0,1-6-6V6A6,6,0,0,1,6,0Z" transform="translate(19 13)" fill="#354e56"/>
        <g id="Group_196" transform="translate(1.998 3.5)">
            <line id="Line_14" y1="5" x2="5" transform="translate(30.002 20.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="3"/>
            <line id="Line_15" x2="5" y2="5" transform="translate(30.002 25.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="3"/>
        </g>
        </g>
    </svg>
    
    return (
        <div className="sidenav-container" style={{ width: menuWidth }}>
            <div className="burger-icon" onClick={burgerClicked}>{ expanded ? burgerClose : burgerOpen }</div>
            <Sidenav 
                activeKey={currentKey}
                expanded={expanded}
                onSelect={navItemSelected}>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item eventKey="1" icon={<Icon icon="th-large" />}>
                            <p>Dashboard</p>
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="data-increase"/>}>
                            Widget Builder
                        </Nav.Item>
                        <Nav.Item eventKey="3" icon={<Icon icon="user" />}>
                           Co-Workers
                        </Nav.Item>
                        <Nav.Item eventKey="4" icon={<Icon icon="group" />}>
                            Departments
                        </Nav.Item>
                        <Nav.Item eventKey="5" icon={<Icon icon="gear-circle" />}>
                            Settings
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
}

export default SideNav;