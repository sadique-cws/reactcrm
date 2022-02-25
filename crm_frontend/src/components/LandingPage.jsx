import * as React from 'react';
import { Container, Typography, TextField, Button, Grid, } from '@mui/material';
import { Box } from '@mui/system';
import { InputAdornment } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import logo_new1 from '../logo_new1.svg';
export default function LandingPage() {
    return (
        <>
            <Container maxWidth sx={{ height: '24px', backgroundColor: '#ccc' }}>
                <Box sx={{ paddingRight: 15, }}>
                    <FacebookIcon sx={{ float: 'right', minWidth: '35px' }} />
                    <InstagramIcon sx={{ float: 'right', minWidth: '35px' }} />
                    <YouTubeIcon sx={{ float: 'right', minWidth: '35px' }} />
                    <TwitterIcon sx={{ float: 'right', minWidth: '35px' }} />
                    <RssFeedIcon sx={{ float: 'right', minWidth: '35px' }} />
                </Box>
            </Container>


            <Grid container>
                <Grid item sm={12} lg={8}>
                    <Container sx={{ height: '400px' }}>
                        <Box sx={{ textAlign: 'center', }} >
                            <Typography variant='h2' sx={{ maxWidth: '600px', marginTop: '40px' }} >Lorem, ipsum dolor sit amet consectetur a.</Typography>
                            <Typography sx={{ maxWidth: '600px', fontSize: '21px', marginTop: '20px', color: '#25373fb3' }} >Lorem, ipsum dolor sit amet consectetur asba,bds,ab,mdmsb,nbd,sanbn</Typography>
                            <TextField
                                sx={{
                                    width: '512px', float: 'left', marginLeft: '50px', marginTop: "40px", borderRadius: '90px',

                                    [`& fieldset `]: {
                                        borderRadius: '50px'
                                    }
                                }}
                                multiline={true}
                                rows={1}
                                placeholder="@ Enter Email"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <Button variant='contained' sx={{ borderRadius: '90px', height: '15px', minWidth: '137px', marginRight: '-7px', padding: '28px', backgroundColor: 'black', color: 'white' }}>Never Miss a Story</Button>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Container>
                </Grid>
                <Grid item sm={0} lg={4}>
                    <Box sx={{ marginTop: '90px' }}>
                        <img src={logo_new1} width="340px" sx={{ marginRight: '100px' }} alt=" Logo" />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}