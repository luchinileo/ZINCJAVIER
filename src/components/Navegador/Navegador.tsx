import { Grid } from '@mui/material'
import React from 'react'

export const Navegador = () => {
  return (
    <Grid container style={{height:60}}
    display={'flex'}
    justifyContent={'center'}
    alignItems={'center'}>
        <Grid item xs={12} md={4}>
            Zingueria Ushuaia
        </Grid>
        <Grid item xs={12} md={8}>
            <ul style={{display:'flex'}}>
                <li style={{marginLeft:'25px'}}>Inicio</li>
                <li style={{marginLeft:'25px'}}>Quienes Somos</li>
                <li style={{marginLeft:'25px'}}>Producto</li>
                <li style={{marginLeft:'25px'}}>Contacto</li>
            </ul>
        </Grid>
    </Grid>
  )
}
