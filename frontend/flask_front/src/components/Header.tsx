import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import HelpOutline from '@mui/icons-material/HelpOutline';
import React, {useState} from 'react';
import Form from './Form';

type FormPropsType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  getResults: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography>
          Neko-chan
        </Typography>
        <Form />
        <HelpOutline/>
      </Toolbar>
    </AppBar>
  )
};

export default Header;