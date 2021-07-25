import React from 'react';
import './SidebarOption.css';

function SidebarOption({ title, Icon, isPlaylist }) {
    return (
        <div className={`sidebarOption ${isPlaylist && "playlist"}`}>
            
            {/*If there's an icon, then render: */}
            {Icon && <Icon className="sidebarOption__icon" />}

            {Icon ? <h4 className="title">{title}</h4> : 
            <p className="title">{title}</p>}
        </div>
    );
}

export default SidebarOption;