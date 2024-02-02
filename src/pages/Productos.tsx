import React from 'react';
import { Grid } from '@mui/material';
import data from '../data/proyectos.json';
import { Navegador } from '../components/Navegador/Navegador';
import Carousel from '../components/carrucel/Carrucel';

export const Productos = () => {
  return (
    <div className='producto-container'>
      <Navegador />

      <Grid  container spacing={2}>
        {data.proyecto.map((proyecto:Proyecto) => (
          <Grid item xs={12} md={6} key={proyecto.id} className='box'>
            <div>Proyecto: {proyecto.title}</div>
            <Carousel images={proyecto.images || []} />
            <div style={{ width: '100%', height: 200 }}></div>
            <div>Descripción: {proyecto.description}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};