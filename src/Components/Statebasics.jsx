import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [pname,setPname] = useState("Raju")

    const changename = () => {
        setPname("Lucifer")
    }
  return (
    <div  style={{paddingTop:'100px'}}>
        <Typography variant='h4' color={'error'} >Hello {pname}</Typography>
        <Button variant='contained' onClick={changename}>Change</Button>
    </div>
  )
}

export default Statebasics