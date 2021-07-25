import { PlayArrow, FavoriteBorderRounded, RemoveCircleOutline, MoreHoriz } from '@material-ui/icons';
import React from 'react';
import './SongRow.css';

function SongRow({ song, num }) {
    const now = new Date();

    const dateDiff = (first, second) => {
        return Math.round((second-first) / (1000 * 60 * 60 * 24));
    }

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
                <p>3:36</p>

                <div className="songRow__duration__icon">
                    <MoreHoriz className="songRow__more" />
                </div>
            </div>
        </div>
    );
}

export default SongRow;