import React from 'react';
import './Footer.css';
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <p>Album and song details</p>
            </div>

            <div className="footer__center">
                <Shuffle className="footer__green"/>
                <SkipPrevious className="footer_icon"/>
                <PlayCircleOutline fontSize="large" className="footer_green" />
                <SkipNext className="footer_icon"/>
                <Repeat className="footer_green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;