import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Typography,Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function InsertPost(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();

   
    const resetData = () => {
       setEmail("");
       setPassword("");
    }
    const handleClick = () => {
    
        axios({
            method:"post",
            url: "http://localhost:8000/api/login",
            data: {
                email: email,
                password: password,
            },
        }).then((response)  => {
            if(response.status == 200){
                localStorage.setItem("isLogined",true);
                localStorage.setItem("userData", JSON.stringify(response.data));
                props.setLogin(true);
                navigate("/");
            }
            else{
                console.log(response.data.error)
            }
            
        });

        resetData();

    }
  return (
    <Grid container>
        <Grid item lg={4} sx={{ mx:"auto" }}>
            <Box component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
            <Typography variant='h6' sx={{ m:2 }}>
                    Login Here
            </Typography>
            <div>
                <TextField fullWidth id="outlined-required"  onChange={(e)=> setEmail(e.target.value)}label="email" value={email} />
                <TextField fullWidth id="outlined-required"  onChange={(e)=> setPassword(e.target.value)}label="Password" value={password} />
                

                <Button variant="contained" onClick={handleClick} sx={{ width:"100%",m:1 }}>Login</Button>
            </div>
            </Box>
        </Grid>
    </Grid>
    
  );
}
