import React from 'react';
import {Grid} from '@material-ui/core';
import MainMenuButtons from './MainMenuButtons'


const MainMenu = () =>{
    
    return (
        <Grid item container>
        
            <Grid item xs={1} sm={2} />

            <Grid item xs={10} sm={8} container direction='column' justify='center' spacing={0} alignItems='stretch' style={{backgroundColor: '#C8A320', height: '95vh'}} >
                <MainMenuButtons />
            </Grid>

            <Grid item xs={1} sm={2} />
            
        </Grid>
    )
}

export default MainMenu;