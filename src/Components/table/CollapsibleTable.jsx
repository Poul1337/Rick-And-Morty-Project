import React, { useState } from 'react';
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
import SearchInput from '../input/SearchInput';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function CollapsibleTable(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [characterData, setCharacterData] = useState(null);
  const [openRows, setOpenRows] = useState([]);

  const fetchCharacterData = (id) => {
    fetch(`${import.meta.env.VITE_BASE_URL}/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setCharacterData(response);
        console.log(characterData);
      });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, props.data?.length - page * rowsPerPage);

  return (
    <div className="table">
      <SearchInput />
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
              ? props.data?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : props.data
            )?.map((data) => (
              <>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                  <TableCell>
                    <Checkbox color="default" />
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => {
                        if (openRows.includes(data.id)) {
                          setOpenRows((prevOpenRows) =>
                            prevOpenRows.filter((id) => id !== data.id)
                          );
                        } else {
                          setOpenRows((prevOpenRows) => [
                            ...prevOpenRows,
                            data.id,
                          ]);
                          if (!characterData) {
                            fetchCharacterData(data.id);
                          }
                        }
                      }}
                    >
                      {openRows.includes(data.id) ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {data.name}
                  </TableCell>
                  <TableCell>
                    {data.status || data.type || data.air_date}
                  </TableCell>
                  <TableCell>
                    {data.species || data.dimension || data.episode}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse
                      in={openRows.includes(data.id)}
                      timeout="auto"
                      mountOnEnter
                    >
                      {characterData && (
                        <Box sx={{ margin: 1 }}>
                          <Typography
                            variant="h6"
                            gutterBottom
                            component="div"
                            align="left"
                          >
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
                                  {data.gender}
                                </TableCell>
                                <TableCell>{data.created}</TableCell>
                                <TableCell>
                                  {data[props.thirdDetailResult]}
                                </TableCell>
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
          count={props?.data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
