import * as React from 'react';
import Box from '@mui/material/Box';

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { MenuItem,Typography,Button,Menu
} from '@mui/material';

export default function CategoryList() {

    const [data, setData] = React.useState([{id:1,title:"testing"},{id:2,title:"testing2"}])


    const getData = () =>{
        axios.get("http://127.0.0.1:8000/api/category")
        .then((response) => {
            const mydata = response.data;
            setData(mydata);
        })
    };
 
    useEffect(() => getData(),[])


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
   
  return (
    <Box sx={{ width: '100%', maxWidth: 360,  }}>
      <nav aria-label="main mailbox folders">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        sx={{ color:'white',background:'transparent' }}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

      >
        Category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {data.map((data,i) => (
        <MenuItem key={i}>
         <Typography   onClick={handleClose}>{data.cat_title}</Typography>
        </MenuItem>

        ))}
      </Menu>
        {/* <MenuItem>
         {data.map((data,i) => (
             <Typography key={i} disablePadding>{data.cat_title}</Typography>  
         ))}
        </MenuItem> */}
      </nav>
     
    </Box>
  );
}
