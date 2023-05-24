import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} align='left'  color={'aqua'} >Newapp</Typography>
                <Button variant='contained' color='error' > <Link to={'/'} style={{color:'whitesmoke'}} >Home</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='success' > <Link to={'/first'} style={{color:'whitesmoke'}}>First</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='secondary' > <Link to={'/table' } style={{color:'whitesmoke'}}>Table</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='warning' > <Link to={'/axios'} style={{color:'whitesmoke'}}>Apiox</Link></Button>&nbsp;&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar