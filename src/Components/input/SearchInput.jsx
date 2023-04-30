import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchResult from './SearchResult';
import { useState } from 'react';

export default function SearchInput() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      style={{ display: 'flex', justifyContent: 'center' }}
      onKeyPress={(key) => {
        if (key.code === 'Enter') {
          setOpen(true);
          setInputValue(key.target.value);
          key.target.value = '';
        }
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search for character you like"
        variant="outlined"
      />
      <SearchResult open={open} setOpen={setOpen} value={inputValue} />
    </Box>
  );
}
