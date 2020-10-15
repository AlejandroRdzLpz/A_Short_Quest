import React from 'react';
import {Menu, MenuItem, Fade} from '@material-ui/core';


const MenuButton = (props) =>{
    const clickHandle = () =>{
        props.handleClose(null)
    }
    return (
            <Menu
                id="simple-menu"
                open={Boolean(props.anchorEl)}
                keepMounted
                TransitionComponent={Fade}
                getContentAnchorEl={null} >
                <MenuItem onClick={clickHandle}>Continue</MenuItem>
                <MenuItem onClick={clickHandle}>Save Game</MenuItem>
                <MenuItem onClick={clickHandle}>Logout</MenuItem>
            </Menu>
    )
}
export default MenuButton;