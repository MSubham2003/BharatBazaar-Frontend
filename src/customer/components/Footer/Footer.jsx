import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Button } from '@headlessui/react'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

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
            <div className="text-center text-white bg-slate-950 text-sm py-5">
            ©2024 Bharat Bazaar. All Rights Reserved <br />Made by Subham Mohanty<br />Contact {'  '} <EmailOutlinedIcon onClick={() => window.open("https://mohantysubham853@gmail.com")}/>
            <InstagramIcon className="cursor-pointer" onClick={() => window.open('https://stackoverflow.com/')}/>
            </div>
        </div>
    )
}

export default Footer