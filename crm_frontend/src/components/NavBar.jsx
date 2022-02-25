import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import CategoryList from './CategoryList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material';

const ResponsiveAppBar = (props) => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout = () => {
    localStorage.clear();
    props.setLogin(false);
    navigate("/login");

  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleSearch = () => {
    console.log('search')
  }

  return (
    <AppBar sx={{ backgroundColor: "black", position: 'static' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: "white", textDecoration: "none" }} >
            News Portal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button><CategoryList /></Button>
            {(localStorage.getItem("isLogined") == "true" && <Button component={Link} to="/insert" sx={{ my: 2, color: 'white', display: 'block' }}>Insert Post</Button>)}
            {(localStorage.getItem("isLogined") != "true" && <><Button component={Link} to="/login" sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>
              <Button variant="contained" component={Link} to="/register" sx={{ my: 1, color: 'white', marginLeft: '15px', borderRadius: '100px', padding: '15px', backgroundColor: '#ffc20f', color: 'black', textDecoration: 'underline', textDecorationColor: 'black', textDecorationThickness: '2px' }}>Signup</Button></>
            )}

          </Box>

          <Button sx={{ color: 'white', }}>
            <SearchIcon sx={{ fontSize: 30 }} onClick={handleSearch} />
          </Button>
          {(props.user && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button variant='outline' onClick={handleOpenUserMenu} sx={{ p: 0 }} endIcon={<KeyboardArrowDownIcon />}>
                <Typography variant="p" sx={{ color: "white" }}>{props.user.name}</Typography>
              </Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={() => logout()}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>)}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
