import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import { CardActionArea } from '@mui/material';

export default function MediaControlCard(props) {
console.log(props.image)
  return (
    <Card square={true}>
      <CardActionArea>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src={"image/"+props.image}
      />
        <CardContent sx={{ border: '0px' }}>
          <Typography component="div" variant="h4" sx={{ textDecoration: 'underline' }}>
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ marginTop: "10px" }} component="div">
            {props.content}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div" sx={{ marginTop: '20px' }}>
            Story By:{props.author}
          </Typography>
        </CardContent>
        <Box sx={{ justifyContent: "end", display: "flex", p: 2, width: "100%" }}>
          <Button component={Link} to={"/post/" + props.link} variant='contained' color="secondary" sx={{ marginRight: 2 }}>
            <Typography>Read More</Typography>
          </Button>
          <Button onClick={props.delete} variant='contained' sx={{ marginRight: 2, backgroundColor: "red", color: "white" }}>
            <Typography>Delete</Typography>
          </Button>
        </Box>

      </CardActionArea>

    </Card>
  );
}
