import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledOutlinedInput = styled(OutlinedInput)(() => ({
  width: "100%",
  marginTop: "15px",
}));

export default function UserCreateButton({ groups, createUser, setIsFetching }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = React.useState({username: '', group_id: ''})

  const handleChange = (e) => {
    const name = e.target.name;
    setData({...data, [name]: e.target.value});
  }

  const handleClick = () => {
    createUser(data.username, data.group_id);
    setData({username: '', group_id: ''});
    setIsFetching(true)
    setOpen(false);
  }

  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "flex-end",
        margin: "10px",
      }}
    >
      <Button variant="outlined" onClick={handleOpen}>
        Add user
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Typography>Username</Typography>
              <Box>
                <StyledOutlinedInput name="username" onChange={handleChange} value={data.username} placeholder="Username"/>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Typography>Group</Typography>
              <Box sx={{marginTop: "15px"}}>
                <FormControl fullWidth>
                  <NativeSelect name="group_id" onChange={handleChange}>
                    <option value=''>None</option>
                    {groups.map(group => (
                      <option key={group.id} value={group.id}>{group.name}</option>
                    ))}
                  </NativeSelect>
                </FormControl>
              </Box>
            </Grid>
            <Grid xs={12}>
              <Box>
                <Button
                  sx={{marginTop: '15px', width: '100%'}}
                  variant="contained"
                  onClick={handleClick}
                >
                  Add user
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Stack>
  );
}
