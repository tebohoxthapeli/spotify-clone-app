import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import React from 'react';
import './Header.css';
import { useDataLayerValue } from './DataLayer';

function Header() {
    const [{ user }] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <Search />
                <input placeholder="Search for artists, songs or playlists" type="text" />
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt="avatar" />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
}

export default Header;