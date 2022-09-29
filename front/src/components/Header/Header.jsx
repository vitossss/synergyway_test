import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)(() => ({
    padding: '10px',
    width: '150px',
}))

export default function Header() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', borderBottom: '1px solid #c1c1c1' }}>
      <StyledButton>
        <NavLink style={{textDecoration: 'none', padding: '10px', color: '#000'}} to={'/'}>Users</NavLink>
      </StyledButton>
      <StyledButton>
        <NavLink style={{textDecoration: 'none', padding: '10px', color: '#000'}} to={'/groups/'}>Groups</NavLink>
      </StyledButton>
    </Box>
  );
}