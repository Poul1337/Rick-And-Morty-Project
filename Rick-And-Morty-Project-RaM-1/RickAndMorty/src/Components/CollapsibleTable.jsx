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



function createData(id, name, status, species, gender, created, type) {
  return {
    id,
    name,
    status,
    species,
    gender,
    created,
    type,
  };
}



function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [characterData, setCharacterData] = useState(null);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const fetchCharacterData = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(response => setCharacterData(response))
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
        <Checkbox color="default" />
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              if (!open && !characterData) {
                fetchCharacterData(row.id);
              }
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell>{row.species}</TableCell>
        
      </TableRow>
      <TableRow>
        
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          {characterData && (
            <Box sx={{ margin: 1 }}>
              
              <Typography variant="h6" gutterBottom component="div" align='left'>
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  
                  <TableRow>
                    <TableCell>Gender</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      {characterData.gender}
                      </TableCell>
                      <TableCell>{characterData.created}</TableCell>
                      <TableCell>{characterData.location.name}</TableCell>
                    </TableRow>
                   
                </TableBody>
              </Table>
            </Box>
          )}</Collapse>
        </TableCell>
        
      </TableRow>
      
    </React.Fragment>
  );
}


export default function CollapsibleTable() {
  const [tableData, setTableData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
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
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Species</TableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
        {(rowsPerPage > 0
            ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : tableData
          ).map((data) => (
            <Row
              key={data.id}
              row={createData(
                data.id,
                data.name,
                data.status,
                data.species
              )}
              page={page}
              rowsPerPage={rowsPerPage}
              handleChangePage={handleChangePage}
              handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
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
  );
}