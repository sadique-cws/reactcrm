import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  
import axios from 'axios';
import {useParams} from 'react-router-dom'

export default function SingleContentCard() {
  const [data, setData] = React.useState([]);
  const params = useParams();
  React.useEffect(() => {
      axios.get(`http://localhost:8000/api/post/${params.id}`).then(response => setData(response.data))
  },[])

  return (
    <Card sx={{ display: 'flex', marginBottom:3,height:'auto' }}> 
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h4" sx={{ textDecoration:'underline' }}>
            { data.title }
          </Typography>   
          <Typography variant="subtitle1" color="text.secondary" sx={{ marginTop:'30px' }} component="div">
            {data.content}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ marginTop:'15px' }} component="div">
            By:{data.author}
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        
        image="https://images.moneycontrol.com/static-mcnews/2021/08/sensex_nifty_sensexdown.jpg?impolicy=website&width=500&height=431"
        alt={ data.title }
      />
    </Card>
  );
}
