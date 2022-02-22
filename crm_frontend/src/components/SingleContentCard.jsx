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
    <Card sx={{ display: 'flex', marginBottom:3 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://mui.com/static/images/cards/live-from-space.jpg"
        alt={ data.title }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            { data.title }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {data.author}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {data.content}
          </Typography>
        </CardContent>
        
      </Box>
      
    </Card>
  );
}
