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
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import UserEditButton from "./UserEditButton";

const StyledDeleteButton = styled(Button)(() => ({
  color: "red",
  border: "1px solid red",
}));

export default function UserTable({ users, groups, deleteUser, updateUser, setIsFetching }) {

  const [data, setData] = React.useState({user_id: '', username: '', group_id: ''})

  const handleSet = (user) => {
    setData({user_id: user.id, username: user.username, group_id: user.groups.id})
  }

  const handleDelete = (user) => {
    deleteUser(user.id)
    setIsFetching(true)
  }

  return (
    <Container sx={{ marginTop: "50px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Created</TableCell>
              <TableCell align="right">Group</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.created}</TableCell>
                <TableCell align="right">{user.groups.name}</TableCell>
                <TableCell align="right" sx={{display: 'flex', alignItem: 'flex-end'}}>
                  <Box sx={{display: 'flex'}}>
                    <UserEditButton
                      handleSet={handleSet} 
                      data={data} setData={setData} groups={groups} user={user} updateUser={updateUser} setIsFetching={setIsFetching}
                    />
                    <StyledDeleteButton sx={{marginLeft: '15px'}} onClick={() => handleDelete(user)}>Delete user</StyledDeleteButton>
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
