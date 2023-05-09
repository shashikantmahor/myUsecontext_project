import React, { memo, useState } from "react";
import {
  Table as MTable,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TablePagination,
} from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import TextField from "./TextField";
import { styled } from "@mui/material/styles";
import Box from "./Box";
import TableLoadingSkeleton from "./TableLoadingSkeleton";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Box from "@mui/material/Box";
// import { visuallyHidden } from "@mui/utils";
// import PropTypes from "prop-types";

const StyledTableCell = withStyles({
  root: {
    borderBottom: "none !important",
    padding: "0px 0px !important",
  },
})(TableCell);

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {},
  headRow: {
    background: "#EDF7FF",
    borderRadius: "50%",
  },
  headTableCell: {
    color: "#707070",
    // fontFamily: theme.typography.fontFamily,
    fontSize: "14px",
    fontWeight: "bold",
    padding: "20px",
    border: "1px solid #E0E0E0",
    whiteSpace: "nowrap",
    textAlign:"start",
    
  },
  bodyTableCell: {
    color: "#707070",
    // fontFamily: theme.typography.fontFamily,
    fontSize: "13px",
    textAlign:"start",
    marginLeft:"-10px",
    fontWeight:"bold"

  },
}));

const Table = (props) => {
  console.log(props.isLoading);
  let {
    columns = [],
    data = { 0: [] },
    count = 0,
    pagination = true,
    localPagination = true,
    page: pageProps = 0,
    rowsPerPage: rowsPerPageProps = 10,
    onPageChange = () => null,
    sx = {},
  } = props;

  const classes = useStyles();
  const [page, setPage] = useState(pageProps);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageProps);

  let rows = data[page] || [];
  if (data.constructor === Array) {
    rows = data;
    
    count = count || data.length || 0;

  }




  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    onPageChange(newPage + 1, rowsPerPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
    onPageChange(1, parseInt(event.target.value));
  };

  
  if (localPagination) {
    rows = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }

  const renderRow = (col, row, colIndex, rowIndex) => {
    let value = "";
    if (col.field && (row[col.field] || row[col.field] === 0)) {
      value = row[col.field];
    }
    if (col.valueGetter && !col.enableEdit) {
      value = col.valueGetter(value, row);
    }

    return (
      <TableCell
        key={`index${rowIndex}${colIndex} ` + Math.random()}
        sx={{
          verticalAlign: "center",
          border: "1px solid #E0E0E0",
          paddingLeft: "1.875rem",
          // textAlign:"center"
        }}
      >
        {col.enableEdit && col.onChange ? (
          <div style={col.style}>
            <TextField
              defaultValue={value}
              onChange={e => col.onChange(e.target.value, rowIndex)}
            />
          </div>
        ) : (
          <div className={classes.bodyTableCell} style={col.style}>
            {/* {value || "-"} */}
            {value===0? 0 : value || "-"}
          </div>
        )}
      </TableCell>
    );
  };

  return (
    <>
      <TableContainer sx={sx}>
        <MTable>
          <TableHead >
            <TableRow>
              {columns.length
                ? columns.map((col) => (
                    <StyledTableCell key={col.field}>
                      <div className={classes.headTableCell}>
                        {col.headerName}
                      </div>
                    </StyledTableCell>
                  ))
                : null}
            </TableRow>
          </TableHead>
          <TableBody>
          { props.isLoading ? <TableLoadingSkeleton rows={props.columns} /> 
          :   <>
            
             {rows.length
              ? rows.map((row, rowIndex) => (
                  <StyledTableRow key={rowIndex + Math.random()}>
                    {columns.length
                      ? columns.map((col, colIndex) =>
                          renderRow(col, row, colIndex, rowIndex)
                        )
                      : null}
                  </StyledTableRow>
                ))
              : null}
              
              </>}
          </TableBody>
        </MTable>
      </TableContainer>
      { data.length === 0 ? 
                    <Box sx={{  textAlign:"center" }}>
            
                      <p>Data Not Found </p> 
                      
                    </Box>
                    : "" }

      {pagination ? (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={count}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ) : null}
    </>
  );
};

export default memo(Table);