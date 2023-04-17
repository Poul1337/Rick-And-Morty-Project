import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchResult from '../SearchResult';

export default function SearchInput() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onKeyDown={() => <SearchResult />}
      />
    </Box>
  );
}
