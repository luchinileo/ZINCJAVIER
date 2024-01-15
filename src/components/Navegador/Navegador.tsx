import { Grid } from '@mui/material'
import React from 'react'

export const Navegador = () => {
  return (
    <Grid container style={{height:60}}>
        <Grid item xs={12} md={4}>
            Zingueria Ushuaia
        </Grid>
        <Grid item xs={12} md={8}>
            <ul>
                <li>Inicio</li>
                <li>Quienes Somos</li>
                <li>Producto</li>
                <li>Contacto</li>
            </ul>
        </Grid>
    </Grid>
  )
}
