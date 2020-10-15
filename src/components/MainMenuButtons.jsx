import React from 'react';
import {Grid, ButtonGroup, Button} from '@material-ui/core';
import ButtonStyle from '../styles/ButtonGroupStyle'
import TitleStyles from '../styles/TitleStyles'

const MainMenuButtons = () =>{
    const btnStyle = ButtonStyle();
    const titleStyles = TitleStyles();
    return (
        <>
        <Grid item><h1 className={titleStyles.titleStyle}>A Short Quest</h1></Grid>
        <ButtonGroup 
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                size='large'>
            <Button className={btnStyle.btnGroupStyles} color='inherit'>New Game</Button>
            <Button className={btnStyle.btnGroupStyles} color='inherit'>Load Game</Button>
            <Button className={btnStyle.btnGroupStyles} color='inherit'>Credits</Button>
        </ButtonGroup> 
        </>
    )
}
export default MainMenuButtons;