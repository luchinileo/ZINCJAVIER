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
                <NavLink to={'/'}  className={styles.link} 
                style={({isActive}) =>({
                  color:isActive ? 'red' : 'black ',
                })}
                >Inicio</NavLink>
                <NavLink to={'/quienessomos'} style={({isActive}) =>({
                  color:isActive ? 'red' : 'black ',
                })} className={styles.link}>Quienes Somos</NavLink>
                <NavLink to={'/producto'} style={({isActive}) =>({
                  color:isActive ? 'red' : 'black ',
                })} className={styles.link}>Producto</NavLink>
                <NavLink to={'/contacto'} style={({isActive}) =>({
                  color:isActive ? 'red' : 'black ',
                })} className={styles.link}>Contacto</NavLink>
            </ul>
        </Grid>
    </Grid>
  )
}
