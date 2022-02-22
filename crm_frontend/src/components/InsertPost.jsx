import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Typography,Button, FormControl, MenuItem, InputLabel,Select } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';

export default function InsertPost() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category_id, setCategory_id] = useState("");
    const [content, setContent] = useState("");

    const [formdata, setFormdata] = useState([]);
    const [categoryData, setCategoryData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
            
            axios.get("http://localhost:8000/api/category").then(response => setCategoryData(response.data))
    },[])
    const resetData = () => {
        setTitle("");
        setAuthor("");
        setContent("");
        setCategory_id("");
    }
    const handleClick = () => {
        setFormdata([{
            "title": title,
            "author": author,
            "category_id": category_id,
            "content" : content, 
        }]);

        axios({
            method:"post",
            url: "http://localhost:8000/api/post",
            data: {
                title: title,
                author : author,
                category_id: category_id,
                content: content
            },
        });

        setFormdata([])
        resetData();
        navigate("/")

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
                    Insert Post Here
            </Typography>
            <div>
                <TextField fullWidth id="outlined-required" onChange={(e)=> setTitle(e.target.value)} label="title" value={title}  />
                <TextField fullWidth id="outlined-required"  onChange={(e)=> setAuthor(e.target.value)}label="author" value={author} />
                <FormControl fullWidth sx={{ m:1 }}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category_id}
                        label="Category"
                        onChange={(e)=> setCategory_id(e.target.value)}
                    >
                        {
                            categoryData.map((data, key) => (
                                <MenuItem value={data.id} key={key}>{data.cat_title}</MenuItem>
                            ))
                        }
                        
                        
                    </Select>
                </FormControl>
                <TextField fullWidth multiline id="outlined-required" value={content} onChange={(e)=> setContent(e.target.value)}  rows={7} label="content"  />

                <Button variant="contained" onClick={handleClick} sx={{ width:"100%",m:1 }}>Insert Post</Button>
            </div>
            </Box>
        </Grid>
    </Grid>
    
  );
}
