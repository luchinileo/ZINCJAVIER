import React from 'react';
import { Grid } from '@mui/material';
import data from '../data/proyectos.json';
import { Navegador } from '../components/Navegador/Navegador';


export const Productos = () => {
  return (
    <div className='producto-container'>
      <Navegador />

      <Grid  container spacing={2}>
        {data.proyecto.map((proyecto:Proyecto) => (
          <Grid item xs={12} md={6} key={proyecto.id} className='box'>
            <div>{proyecto.title}</div>
            <div>Proyecto: {proyecto.image}</div>
            
            <div style={{ width: '100%', height: 100 }}></div>
            <div> {proyecto.description}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};