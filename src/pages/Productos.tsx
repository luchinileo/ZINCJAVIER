import { Grid } from '@mui/material'
import data from '../data/proyectos.json'
import React from 'react'
import { Navegador } from '../components/Navegador/Navegador'

export const Productos = () => {
  return (
    <>
     <Navegador/>
    
    <Grid container>
    {
        data.proyectos.map((proyecto) =>(
    <Grid item xs={12} md={6} style={{backgroundColor:''}} key={proyecto.id} className='box'>
        Proyecto :{proyecto.title}
        {/*imagem */}
        <div style={{width:'100%', height: 200}}></div>
        Descripcion:{proyecto.description}
    </Grid>
  )
  )
}
</Grid>
</>
  )
}