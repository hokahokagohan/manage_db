import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, useTheme } from '@mui/material/styles'
import React from "react";

type FormPropsType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  getResults: (e: React.FormEvent<HTMLFormElement>) => void;
};

const theme = useTheme();

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Form = ({query, setQuery, getResults}:FormPropsType) => {
  // const classes = useStyles();
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search...' inputProps={{'aria-label':'search'}}/>
    </Search>
  );
};

export default Form;