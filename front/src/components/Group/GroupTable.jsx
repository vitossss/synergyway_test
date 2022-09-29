import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import GroupEditButton from "./GroupEditButton";
import Box from "@mui/material/Box"
import { styled } from "@mui/material/styles"

const StyledDeleteButton = styled(Button)(() => ({
    color: 'red',
    border: '1px solid red',
}));

export default function GroupTable({groups, deleteGroup, updateGroup, setIsFetching}) {

  const [data, setData] = React.useState({group_id: '', name: '', description: ''})

  const handleSet = (group) => {
    setData({group_id: group.id, name: group.name, description: group.description})
  }

  const handleDelete = (group) => {
    deleteGroup(group.id)
    setIsFetching(true)
  }

  return (
    <Container sx={{marginTop: "50px"}}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((group) => (
              <TableRow
                key={group.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {group.id}
                </TableCell>
                <TableCell align="right">{group.name}</TableCell>
                <TableCell align="right">{group.description}</TableCell>
                <TableCell align="right" sx={{display: 'flex', alignItem: 'flex-end'}}>
                  <Box sx={{display: 'flex'}}>
                    <GroupEditButton
                      handleSet={handleSet} 
                      data={data} setData={setData} group={group} updateGroup={updateGroup} setIsFetching={setIsFetching}
                    />
                    <StyledDeleteButton sx={{marginLeft: '15px'}} onClick={() => handleDelete(group)}>Delete group</StyledDeleteButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
