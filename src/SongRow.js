import { PlayArrow, FavoriteBorderRounded, RemoveCircleOutline, MoreHoriz } from '@material-ui/icons';
import React from 'react';
import './SongRow.css';

const now = new Date();

const dateDiff = (first, second) => {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

const toMinSec = duration => {
    let sec = Math.trunc(parseInt(duration) / 1000);
    if (sec < 60) return `0:${sec}`;
    
    let min = Math.trunc(sec / 60);
    sec = sec % 60;
    if (sec === 0) return `${min}:00`;
    
    sec = sec.toString();
    
    if (sec.length === 1) sec = `0${sec}`;
    
    return `${min}:${sec}`;
};

function SongRow({ song, num }) {
    return (
        <div className="songRow">
            <div className="songRow__trackNum">
                <p>{num}</p>
                <PlayArrow className="playArrow" />
            </div>

            <div className="songRow__title">
                <img className="songRow__album" src={song.track.album.images[0].url} alt="cover" />

                <div>
                    <h3>{song.track.name}</h3>
                    <p className="artists">
                        {song.track.artists.map(artist => artist.name).join(', ')}
                    </p>
                </div>
            </div>

            <p className="songRow__albumName">{song.track.album.name}</p>

            <div className="songRow__date__added">
                <p>{dateDiff(new Date(song.added_at), now)} days ago</p>

                <div className="date__added__icons">
                    <FavoriteBorderRounded className="songRow__fav"/>
                    <RemoveCircleOutline className="songRow__remove" />
                </div>
            </div>

            <div className="songRow__duration">
                <p>{toMinSec(song.track.duration_ms)}</p>

                <div className="songRow__duration__icon">
                    <MoreHoriz className="songRow__more" />
                </div>
            </div>
        </div>
    );
}

export default SongRow;