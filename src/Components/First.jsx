import React from 'react'
import { Button, TextField, Typography } from '@mui/material';

const First = () => {
  return (
    <div  style={{paddingTop:'100px'}}> 
      <h1>Lucifer</h1>
    <input placeholder='Game name'/>
    <br/>
    <input placeholder='Rank'/>
    <br/>
    <button>Submit</button>
    <br/>
    <Typography variant='h1'> Lucifer </Typography>
    <br/>
    <TextField variant='outlined' label ='Game anme'/>
    <br/>
    <TextField variant='filled' label ='Game anme'/>
    <br/>
    <TextField variant='standard' label ='Game name'/>
    <br/>
    <Button variant='contained'>Submit</Button>
    <br/>
    <Button variant='outlined'>Submit</Button>
    <br/>
    <Button variant='text'>Submit</Button>
    </div>
  )
}

export default First