import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'



  const Firq = () => {
    var [pname,setPname] = useState("Site")

    const changename1 = () => {
        setPname("Home")
    }

    const changename2 = () => {
      setPname("Gallery")
  }

  const changename3 = () => {
    setPname("Contact")
}
  return (
    <div>
      <Typography variant='h4' color={'secondary'} >Welcome to {pname}</Typography>
      <Button variant='contained' color='success' onClick={changename1} > Home</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant='contained' color='error'onClick={changename2}> Gallery</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant='contained' color='primary'onClick={changename3}> Contact</Button>
    </div>
  )
}

export default Firq