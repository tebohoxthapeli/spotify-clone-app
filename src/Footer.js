import React from 'react';
import './Footer.css';
import { PauseCircleFilled, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDownOutlined, Favorite, BlockOutlined } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <div className="container">
                    <img className="footer__albumArt" 
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/5/59/6lackEastAtlantaLoveLetter.jpg/220px-6lackEastAtlantaLoveLetter.jpg" alt="cover" />

                    <div className="footer__songInfo">
                        <h4>Unfair</h4>
                        <p>6LACK</p>
                    </div>

                    <div className="footer__left_icons">
                        <Favorite className="footer__green" />
                        <BlockOutlined className="blockOutlined"/>
                    </div>
                </div>
            </div>

            <div className="footer__center">
                <div className="container">
                    <Shuffle className="footer__green" />
                    <SkipPrevious className="prev" />
                    <PauseCircleFilled className="pause" />
                    <SkipNext className="next" />
                    <Repeat className="footer__green" />
                </div>
            </div>

            <div className="footer__right">
                <div className="container">
                    <Grid container spacing={2}>
                        <Grid item>
                            <PlaylistPlay />
                        </Grid>
                        <Grid item>
                            <VolumeDownOutlined />
                        </Grid>
                        <Grid item xs>
                            <Slider />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default Footer;