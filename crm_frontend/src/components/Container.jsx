import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ContentCard from './ContentCard';
import CategoryList from './CategoryList';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import LandingPage from './LandingPage'
import Headlines from './Headlines';

export default function Container() {
    const [post,setPost] = React.useState([]);
    
    useEffect(()=>axios.get("http://127.0.0.1:8000/api/post").then((response) => {setPost(response.data);}),[]);
  
  
    const handleDelete = (id) => {
      const newPost = post.filter((data) => {
        return data.id !== id;
      })
      setPost(newPost);

      axios.delete(`http://localhost:8000/api/post/${id}`).then((response) => console.log(response.data.msg))
    }
    return ( 
      
    <>
    <LandingPage/>
    <Box>
      <Typography variant="h5" sx={{marginLeft: '30px',marginRight:'70px', borderBottom:'1px solid #ccc', }}>Breaking News</Typography>
    </Box>


    <Box sx={{ flexGrow: 1,marginTop:2}}>
      <Grid container spacing={2} sx={{ padding:5 }}>
        <Grid item lg={8}>
          
          {post.map((data,i) => (
              <ContentCard key={i} image={data.image} title={data.title} author={data.author} content={data.content} link={data.id} delete={()=> handleDelete(data.id)}/>
              ))}
        </Grid>
       
        <Grid item lg={4}>
          <Headlines/> 
    
        </Grid>
      </Grid>
    </Box>
    </>
  );
}


