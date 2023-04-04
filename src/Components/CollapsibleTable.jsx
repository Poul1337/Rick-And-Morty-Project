import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '@mui/material/Checkbox';
import fetchCorrectData from '../fetchCorrectData'



 


export default function CollapsibleTable(props) {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [characterData, setCharacterData] = useState(null);
  const [openRows, setOpenRows] = useState([]);

  


  const fetchCharacterData = (id) => {
    fetch(`https://rickandmortyapi.com/api/characters/${id}`)
      .then(response => response.json())
      .then(response => setCharacterData(response))
  }


  useEffect(() => {
    fetch(`${props.url}`)
      .then(response => response.json())
      .then(response => setTableData(response.results))
  }, [])


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

 
    

    return (
      <>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>{props.firstTh}</TableCell>
                <TableCell>{props.secondTh}</TableCell>
                <TableCell>{props.thirdTh}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : tableData
                ).map((data) => (
                <>
                  <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                      <Checkbox color="default" />
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {
                          if (openRows.includes(data.id)) {
                            setOpenRows(prevOpenRows => prevOpenRows.filter(id => id !== data.id));
                          } else {
                            setOpenRows(prevOpenRows => [...prevOpenRows, data.id]);
                            if (!characterData) {
                              fetchCharacterData(data.id);
                            }
                          }
                        }}
                      >
                        {openRows.includes(data.id) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {data[props.name]}
                    </TableCell>
                    <TableCell>{data[props.status]}</TableCell>
                    <TableCell>{data[props.species]}</TableCell>
                  </TableRow>
                  
                  <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openRows.includes(data.id)} timeout="auto" mountOnEnter>
                                              {characterData && (
                          <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div" align='left'>
                              Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell>{props.firstDetail}</TableCell>
                                  <TableCell> {props.secondDetail}</TableCell>
                                  <TableCell>{props.thirdDetail}</TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                <TableRow>
                                  <TableCell component="th" scope="row">
                                    {data[props.firstDetailResult]}
                                    </TableCell>
                                  <TableCell>{data[props.secondDetailResult]}</TableCell>
                                  <TableCell>{data[props.thirdDetailResult]}</TableCell>
                                </TableRow>
                              </TableBody>
                            </Table>
                          </Box>
                        )}
                      </Collapse>
                    </TableCell>
                  </TableRow>
                </>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </TableContainer>
    </>
         )}

