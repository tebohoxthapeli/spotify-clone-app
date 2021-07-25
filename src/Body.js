import { FavoriteBorderRounded, MoreHoriz, PlayCircleFilled, ScheduleOutlined } from '@material-ui/icons';
import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ discover_weekly }] = useDataLayerValue();
    let count = 0;
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt="" />

                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="play__shuffle" />
                    <FavoriteBorderRounded className="fav" />
                    <MoreHoriz className="more"/>
                </div>

                <div className="grid__headers">
                    <p className="grid__headers__trackNum">#</p>
                    <p>TITLE</p>
                    <p>ALBUM</p>
                    <p>DATE ADDED</p>
                    <ScheduleOutlined className="grid__headers__duration" />
                </div>

                {discover_weekly?.tracks.items.map(item => {
                    count++;
                    return (
                        <SongRow song={item} num={count} />
                    );
                })}
            </div>
        </div>
    );
}

export default Body;