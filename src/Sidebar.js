import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Home, Search, LibraryMusic } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" className="sidebar__logo" />

            <SidebarOption Icon={Home} title="Home"/>
            <SidebarOption Icon={Search} title="Search"/>
            <SidebarOption Icon={LibraryMusic} title="Your Library"/>
        </div>
    );
}

export default Sidebar;