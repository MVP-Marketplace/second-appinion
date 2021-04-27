import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "boxicons";
import axios from "axios";
import { FormHelperText } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TheTable({ theData }) {
  const classes = useStyles();
  let data = theData;
  console.log(data);
  console.log(data);

  const handleDelete = async (id, e) => {
    await axios.delete(`/api/forms/${id}`).then((res) => {
      console.log(res);
    });
  };

  if (!data) return null;
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-label">Name</TableCell>
            <TableCell align="right" className="table-label">
              Email
            </TableCell>
            <TableCell align="right" className="table-label">
              Date
            </TableCell>
            <TableCell align="right" className="table-label">
              Completed
            </TableCell>
            <TableCell align="right" className="table-label">
              Pain Cause
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                <a href="mailto:email" target="_blank">
                  {row.email}
                </a>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.completed}</TableCell>
              <TableCell align="right">{row.painCause}</TableCell>
              <TableCell align="right">
                <box-icon type="solid" name="edit-alt"></box-icon>
              </TableCell>
              <TableCell align="right">
                <box-icon
                  name="trash"
                  color="red"
                  onClick={(e) => handleDelete(row._id, e)}
                ></box-icon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
