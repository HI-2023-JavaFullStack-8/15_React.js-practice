import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { logout } from '../../modules/UserModule';
import { useDispatch, useSelector } from 'react-redux';

function Headers() {
  const user = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
  };

  return (
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', alignItems: 'center' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          🍟WMYH RESTAURANT🍕
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        {user.id ? (
          <Button color="inherit" onClick={onClickLogout}>Log out</Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">Log in</Button>
        )}
      </Toolbar>
  );
}

export default Headers;
