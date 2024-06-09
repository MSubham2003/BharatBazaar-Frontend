import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Button } from '@headlessui/react'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Footer = () => {
    return (
        <div>
            <Grid className="bg-slate-900 text-white text-center "
                container
                sx={{ py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-6" >Company</Typography>
                    <div className="text-sm">
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>About</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Blog</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Press</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Jobs</Button>
                        </div>
                        <div>
                            <Button className="pb-5" variant='h6' gutterBottom>Partners</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-6" >Solutions</Typography>
                    <div className="text-sm">
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Marketing</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Analytics</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Commerce</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Insights</Button>
                        </div>
                        <div>
                            <Button className="pb-5" variant='h6' gutterBottom>Support</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-6" >Documentation</Typography>
                    <div className="text-sm">
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Guides</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>API Status</Button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography className="pb-6" >Legal</Typography>
                    <div className="text-sm">
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Claim</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Privacy</Button>
                        </div>
                        <div>
                            <Button className="pb-2" variant='h6' gutterBottom>Terms</Button>
                        </div>
                    </div>
                </Grid>
                
            </Grid>
            <div className="text-center text-white bg-slate-950 text-sm py-5 ">
            ©2024 Bharat Bazaar. All Rights Reserved <br />Made by Subham Mohanty<br />
            Contact:- +91 9348228772 <br />  <EmailOutlinedIcon className="cursor-pointer mx-3 mt-3" onClick={() => window.open("https://mohantysubham853@gmail.com")}/>
            <InstagramIcon className="cursor-pointer mx-3 mt-3" onClick={() => window.open('https://www.instagram.com/subham___m/?hl=en')}/>
            <GitHubIcon className="cursor-pointer mx-3 mt-3" onClick={() => window.open('https://github.com/MSubham2003')}/>
            <LinkedInIcon className="cursor-pointer mx-3 mt-3" onClick={() => window.open('https://www.linkedin.com/in/subhammohanty2003/')}/>
            </div>
        </div>
    )
}

export default Footer