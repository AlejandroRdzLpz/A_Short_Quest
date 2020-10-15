import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button, ClickAwayListener } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import typoStyles from '../styles/TypographyStyles';
import appBarStyles from '../styles/AppBarStyles';
import toolBarStyles from '../styles/ToolBarStyles.js';
import MenuButton from './MenuButton'

const Header = () =>{
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () =>{
        setAnchorEl(null)
    }

    const typoClasses = typoStyles();
    const appBarClasses = appBarStyles();
    const toolBarClasses = toolBarStyles();
    return (
    <AppBar position="static" className={appBarClasses.appBarStyles}>
        <Toolbar className={toolBarClasses.tBarStyles}>
            <ClickAwayListener onClickAway={handleClose}>
                <Button onClick={handleClick}><MenuIcon style={{ color: '#ffffff' }} /></Button>
            </ClickAwayListener>
            <MenuButton anchorEl={anchorEl} handleClose={handleClose} />
            <Typography className={typoClasses.typoStyles}>A Short Quest</Typography>
        </Toolbar>
    </AppBar>
    )
}

export default Header;