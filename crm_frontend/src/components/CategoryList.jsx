import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import axios from 'axios';
import { useEffect } from 'react';

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

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
         {data.map((data,i) => (
              <ListItem key={i} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={data.cat_title} />
              </ListItemButton>
            </ListItem>
           
         ))}
        </List>
      </nav>
     
    </Box>
  );
}
