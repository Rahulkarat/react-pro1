import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'


    const Stbas1 = () => {
        var [pname,setPname] = useState("")
        var [val,setval]=useState()
       
            const inputh = (e)=>{
    
                setval(e.target.value)
                console.log(val)
            }

            const changeName=()=>{
                setPname(val)
                setval("")
            }

  return (
    <div>
       <Typography variant='h4' color={'error'} >Hello {pname}</Typography> 
        <TextField label='name' variant='outlined' onChange={inputh}/> <br>
        </br>
    
        <Button variant='contained' onClick={changeName}>Change</Button>

    </div>
  )
}

export default Stbas1