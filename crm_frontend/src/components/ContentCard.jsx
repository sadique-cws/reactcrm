import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  
import {Link} from 'react-router-dom'

export default function MediaControlCard(props) {

  return (
    <Card sx={{ display: 'flex', marginBottom:3 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        alt={ props.title }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            { props.title }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.content}
          </Typography>
        </CardContent>
        <Box sx={{ justifyContent:"end",display:"flex",p:2,width:"100%" }}>
            <Button component={Link} to={"/post/" + props.link} variant='contained' color="secondary" sx={{ marginLeft:"auto",marginRight:2 }}>
                <Typography>Read More</Typography>
            </Button>
            <Button onClick={props.delete} variant='contained'  sx={{ marginLeft:"auto",marginRight:2,backgroundColor:"red",color:"white" }}>
                <Typography>Delete</Typography>
            </Button>
        </Box>
      </Box>
      
    </Card>
  );
}
