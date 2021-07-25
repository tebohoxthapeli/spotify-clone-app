import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Home, Search, LibraryMusic } from '@material-ui/icons';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" className="sidebar__logo" />

            <SidebarOption Icon={Home} title="Home" />
            <SidebarOption Icon={Search} title="Search" />
            <SidebarOption Icon={LibraryMusic} title="Your Library" />

            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map(playlist => {
                return <SidebarOption title={playlist.name} isPlaylist="true" />
            })}
        </div>
    );
}

export default Sidebar;