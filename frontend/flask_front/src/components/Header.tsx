import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import React, {useState} from 'react';
import Form from './Form';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));
  
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Neko-chan
        </Typography>
        <HelpOutlineIcon/>
      </Toolbar>
    </AppBar>
  )
};

export default Header;