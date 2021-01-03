import React from "react";

import './Header.scss';
import 'rsuite/dist/styles/rsuite-default.css';
import { Avatar, Badge } from 'rsuite';

const Header = props => {
    return (
        <header>
            <svg width="94.5" height="32" viewBox="0 0 94.5 32">
                <g id="Group_441" transform="translate(-266 -12)">
                    <g id="Group_380" transform="translate(188 1255.021)">
                    <g id="Rectangle_113" transform="translate(78 -1243.021)" fill="none" stroke="#ffa000" strokeWidth="2">
                        <rect width="32" height="32" rx="2" stroke="none"/>
                        <rect x="1" y="1" width="30" height="30" rx="1" fill="none"/>
                    </g>
                    <text id="W" transform="translate(85 -1220.021)" fill="#ffa000" fontSize="18" fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight="600"><tspan x="0" y="0">W</tspan></text>
                    <line id="Line_25" x2="56" transform="translate(115.5 -1212.021)" fill="none" stroke="#f5a40a" strokeLinecap="round" strokeWidth="2"/>
                    </g>
                    <text id="Builder" transform="translate(302 34)" fill="#ffa000" fontSize="18" fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight="600"><tspan x="0" y="0">Builder</tspan></text>
                </g>
            </svg>
           
             <div className="header-container">
                <Badge>
                    <svg width="16" height="19.5" viewBox="0 0 16 19.5">
                        <path id="notifications-24px" d="M12,22a2.006,2.006,0,0,0,2-2H10A2,2,0,0,0,12,22Zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.63,5.36,6,7.92,6,11v5L4,18v1H20V18Z" transform="translate(-4 -2.5)" />
                    </svg>
                </Badge>
                <span>Jakob Larssen</span>
                <Badge>
                    <Avatar size="sm" src="https://404.error" alt="RS"></Avatar>
                </Badge>
             </div>
        </header>
    )
}

export default Header;