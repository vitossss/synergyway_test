import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
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

export default function GroupEditButton({
  data,
  setData,
  handleSet,
  group,
  setIsFetching,
  updateGroup,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const name = e.target.name;
    setData({ ...data, [name]: e.target.value });
  };

  const handleClick = () => {
    updateGroup(data.group_id, data.name, data.description);
    setData({ group_id: "", name: "", description: "" });
    setIsFetching(true);
    setOpen(false);
  };

  return (
    <Stack sx={{ display: "flex", alignItems: "center" }}>
      <Button
        variant="outlined"
        onClick={() => {
          handleOpen();
          handleSet(group);
        }}
      >
        Edit group
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
              <Typography>Name</Typography>
              <Box>
                <StyledOutlinedInput
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                  placeholder="Name"
                />
              </Box>
            </Grid>
            <Grid xs={12}>
              <Typography>Description</Typography>
              <Box sx={{ marginTop: "15px" }}>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Description"
                  name="description"
                  onChange={handleChange}
                  multiline
                  rows={6}
                  value={data.description}
                />
              </Box>
            </Grid>
            <Grid xs={12}>
              <Box>
                <Button
                  sx={{ marginTop: "15px", width: "100%" }}
                  variant="contained"
                  onClick={handleClick}
                >
                  Update group
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Stack>
  );
}
