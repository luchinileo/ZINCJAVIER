import { Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Navegador.module.css'

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
                <NavLink to={'/'} style={{marginLeft:'25px'}} className={styles.link}>Inicio</NavLink>
                <NavLink to={'/quienessomos'} style={{marginLeft:'25px'}} className={styles.link}>Quienes Somos</NavLink>
                <NavLink to={'/producto'} style={{marginLeft:'25px'}} className={styles.link}>Producto</NavLink>
                <NavLink to={'/contacto'} style={{marginLeft:'25px'}} className={styles.link}>Contacto</NavLink>
            </ul>
        </Grid>
    </Grid>
  )
}
