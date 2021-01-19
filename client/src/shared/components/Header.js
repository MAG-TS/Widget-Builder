import React, { useState, useContext, useEffect } from "react";
import Popup from "./popup/Popup";
import { AuthContext } from '../../shared/context/authContext';

import { Avatar, Badge, Toggle, Input, Button, Divider } from 'rsuite';
import Axios from 'axios';


import './Header.scss';
import 'rsuite/dist/styles/rsuite-default.css';

const Header = props => {
    const [popupOpen, setPopupOpen] = useState(null);
    const [currentStatus, setCurrentStatus] = useState(null);
    const [statusNote, setStatusNote] = useState(null);
    const [jobTitle, setJobTitle] = useState(null);

    const auth = useContext(AuthContext);

    useEffect(() => {
        if (auth.currUser) {
            setCurrentStatus(auth.currUser.status);
            setJobTitle(auth.currUser.jobTitle);
            setStatusNote(auth.currUser.message);
        }
    }, [auth])

    // logout user
    const logoutUser = () => { 
        auth.logout();
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/users/logout",
            })
            .catch(err => { throw err });
    }

    // Logo Popup
   let clearPopup = 
    popupOpen === true ? (
        <Popup clearPopupState={() => clearPopupState()}>
            <div className="curr-status-row">
                <lable for="toggle">Current Status</lable>
                <Toggle id="toggle" defaultChecked={currentStatus} onChange={(boolean) => setCurrentStatus(boolean)}	size="md" checkedChildren="Free" unCheckedChildren="Busy"/>
            </div>

            <lable className="button-margin-top" for="statu-note">Status Note</lable>
            <Input name="status-note" value={statusNote} onChange={(event) => setStatusNote(event)} placeholder="Status note" />

            <lable className="button-margin-top" for="statu-note">Job Title</lable>
            <Input name="job-status" value={jobTitle} onChange={(event) => setJobTitle(event)} placeholder="Status note" />
            
            <Button color="orange" className="button-shadow button-margin-top" onClick={() => onSave()}>Save Changes</Button>

            <Divider/>

            <Button className="button-shadow" onClick={logoutUser}>Logout</Button>
        </Popup> 
        ) : null;

    // Clear Popup state when the Popup is closed
    const clearPopupState = () => {
        setPopupOpen(null);
    }

    // PUT
    // update user changes (status + message + jobTitle)
    const onSave = () => {
        setPopupOpen(null);
        Axios({
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                status: currentStatus,
                message: statusNote,
                jobTitle: jobTitle
            },
            withCredentials: true,
            url: `/users/update-user-status/${auth.currUser._id}`,
            })
        .then((res) => {
            auth.currUser.statusNote = statusNote;
            auth.currUser.status = currentStatus;
            auth.currUser.jobTitle = jobTitle;
            
        })
        .catch(err => { throw err });
    }

    return (
        <header>
            <svg width="100" height="32" viewBox="0 0 94.5 32">
                <g id="Group_441" transform="translate(-266 -12)">
                    <g id="Group_380" transform="translate(188 1255.021)">
                    <g id="Rectangle_113" transform="translate(78 -1243.021)" fill="none" stroke="#ffa000" strokeWidth="2">
                        <rect width="50" height="50" rx="2" stroke="none"/>
                        <rect x="1" y="1" width="30" height="30" rx="1" fill="none"/>
                    </g>
                    <text id="W" transform="translate(85 -1220.021)" fill="#ffa000" fontSize="18" fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight="600"><tspan x="0" y="0">W</tspan></text>
                    <line id="Line_25" x2="56" transform="translate(115.5 -1212.021)" fill="none" stroke="#f5a40a" strokeLinecap="round" strokeWidth="2"/>
                    </g>
                    <text id="Builder" transform="translate(302 34)" fill="#ffa000" fontSize="18" fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight="600"><tspan x="0" y="0">Builder</tspan></text>
                </g>
            </svg>

            {clearPopup}

             <div className="header-container">
                <Badge>
                    <svg width="16" height="19.5" viewBox="0 0 16 19.5">
                        <path id="notifications-24px" d="M12,22a2.006,2.006,0,0,0,2-2H10A2,2,0,0,0,12,22Zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.63,5.36,6,7.92,6,11v5L4,18v1H20V18Z" transform="translate(-4 -2.5)" />
                    </svg>
                </Badge>
                <span>Jakob Larssen</span>
                <Badge>
                    <Avatar className="cursor-pointer" size="sm" src="https://404.error" alt="RS" onClick={() => setPopupOpen(true)}></Avatar>
                </Badge>
             </div>
             
        </header>
    )
}

export default Header;