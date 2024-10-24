import React from 'react'
import { Grid, Button, Box, TextField } from '@mui/material'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {
  const handelsubmit=(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address={
      firstname: data.get("firstname"),
      middlename: data.get("middlename"),
      lastname: data.get("lastname"),
      streetadd: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      mobile: data.get("phonenumber"),
    }
    console.log(address)
  }
  return (
    <div>
      <Grid container >
        <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 border-b cursor-pointer">
            <AddressCard />
            <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained'>Deliver Here</Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-md shadow-md p-5">
            <form onSubmit={handelsubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    id="middlename"
                    name="middlename"
                    label="Middle Name"
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete='given-name'
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid><Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State / Region"
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete='shipping postal-code'
                  />
                </Grid><Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phonenumber"
                    name="phonenumber"
                    label="Phone Number"
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid><Grid item xs={12} sm={6}>
                  <Button sx={{py:1, mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='contained' type='submit'>Deliver Here</Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm