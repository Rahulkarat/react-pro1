import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tabless = () => {
  return (
    <div>
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
            </Table>
        </TableContainer>
    </div>
  )
}

export default Tabless