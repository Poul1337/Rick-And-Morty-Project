import CloseIcon from '@mui/icons-material/Close';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useQuery } from '@tanstack/react-query';
import './style.css';
import axios from 'axios';

const SearchResult = ({ open, setOpen, value }) => {
  const { data } = useQuery({
    queryKey: ['details', value],
    queryFn: () => {
      return axios.post(`https://rickandmortyapi.com/graphql`, {
        query: `query{
            characters(filter: {name: "${value}"}) {
              results {
                name,
                status,
                species,
                type,
                gender,
                image,
                created,
              }
            }
          }`,
      });
    },
    enabled: open,
  });

  const fetchResult = data?.data?.data?.characters?.results[0];
  console.log(fetchResult);

  if (open) {
    return (
      <div id="searchDiv">
        <div id="closeBtn">
          <CloseIcon onClick={() => setOpen(false)} />
        </div>
        <div id="detailsContent">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                {Object.entries(fetchResult || {}).map(([key, value]) => {
                  return (
                    <TableRow>
                      <TableCell>{key}</TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack>
            <Avatar sx={{ width: 350, height: 350 }} src={fetchResult?.image} />
          </Stack>
        </div>
      </div>
    );
  }
};

export default SearchResult;
