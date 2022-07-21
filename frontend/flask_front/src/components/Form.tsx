import { TextField, FormControl, InputAdornment, makeStyles, createStyles, Theme, Paper, InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import React from "react";

type FormPropsType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  getResults: (e: React.FormEvent<HTMLFormElement>) => void;
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
  root: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    alignItems: 'center',
      justifyContent: 'center',
    },
  
    iconButton: {
      paddinf:10,
  },
  
    input: {
      marginLeft: theme.spacing(1),
      flex:1,
  },
}));


const Form = ({query, setQuery, getResults}:FormPropsType) => {
  const classes = useStyles()
  return (
    <>
      {/* <Container>
      <FormControl>
        <InputLabel shrink>Number</InputLabel>
      <Select>
          <MenuItem value='receipt'>受付番号</MenuItem>
          <MenuItem value='faq'>FAQ番号</MenuItem>
          <MenuItem value='manegement'>管理番号</MenuItem>
        </Select>
      <TextField id='outlined' />
      </FormControl>
      </Container> */}

      <Paper component='form' className={classes.root}>
        <SearchIcon />
        <InputBase className={classes.input} placeholder='Search' >
        
        </InputBase>

      </Paper>
    
      <FormControl className={classes.formPosition} onSubmit={getResults}>
        <TextField
          id='outlined-search' name='query' label='Search Field' type='search' variant='outlined' 
          InputProps={{ startAdornment: (<InputAdornment position='start'><SearchIcon /></InputAdornment>) }}
          onChange={e => setQuery(e.target.value)} 
          onKeyPress={e => { if (e.key === 'Enter') { getResults(e) } }} value={query}   
        />
    </FormControl >
    </>
  );
};

export default Form;