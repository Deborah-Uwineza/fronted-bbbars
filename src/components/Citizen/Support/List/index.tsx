import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./style.scss";
import { Link } from "react-router-dom";
import { styled } from '@mui/system';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  
  id: 'National_Id' | 'ountry' | 'city' | 'gender' | 'dob' | 'supportType';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}




const SupportList = (props: any) => {
  const { supports} = props;
  //console.log(supports);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const history=useHistory();

  const handleViewById=(id:string)=>{
    history.push(`/citizen/support/${id}`);
  }

  return (
    <div className="menu-container">
      <div className="menu-header">
        <div className="menu-header-buttons">
          <Button className="btn btn-primary" variant="contained">
            {" "}
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/citizen/support/createsupport"
            >
              Add
            </Link>{" "}
          </Button>
        </div>
      </div>
      <Grid container justify="flex-start" className="menu-content">

        {/* {items.payload && items.payload
            .map((item: IItem) => <ItemCard key={item.id} item={item} />)} */}
 <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
           
                <TableCell sx={{ backgroundColor: '#d2435e' }}>
                National_Id
                </TableCell>
                <TableCell sx={{ backgroundColor: '#d2435e' }}>
                country
                </TableCell>
                <TableCell sx={{ backgroundColor: '#d2435e' }}>
                city
                </TableCell>
                <TableCell sx={{ backgroundColor: '#d2435e' }}>
                gender
                </TableCell>
                <TableCell sx={{ backgroundColor: '#d2435e' }}>
                dob
                </TableCell>
                <TableCell sx={{ backgroundColor: '#d2435e' }}>
                supportType
                </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {supports
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((support) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={support.id}>
                
              
                        <TableCell >
                        <Link onClick={()=>handleViewById(support.id)}>{support.National_Id}</Link>
                        </TableCell>
                        <TableCell >
                         {support.country}
                        </TableCell>
                        <TableCell >
                         {support.city}
                        </TableCell>
                        <TableCell >
                         {support.gender}
                        </TableCell>
                        <TableCell >
                         {support.dob}
                        </TableCell>
                        <TableCell >
                         {support.supportType}
                        </TableCell>
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={supports.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

      </Grid>
    </div>
  );
};

export default SupportList;
