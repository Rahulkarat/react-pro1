import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {

    var [name,setNames] = useState(["Rahul","Albin","Joshua"])
  return (
    <div  style={{paddingTop:'100px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                      <TableCell>
                      Name
                      </TableCell>
                      <TableCell>
                        Age
                      </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        name.map((val,index)=>{
                            return (
                                <TableRow>
                                    <TableCell>{val}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Table1