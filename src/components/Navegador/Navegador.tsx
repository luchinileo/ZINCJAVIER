import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from './Navegador.module.css';

export const Navegador = () => {
  return (
    <Grid
      container
      style={{ height: 60 }}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Grid item xs={12} md={4} className={styles.logoContainer}>
        <img
          src="https://cdn.pixabay.com/photo/2024/01/14/05/14/ai-generated-8507217_1280.jpg"
          alt="Logo"
          className={styles.logo}
        />
        <Typography variant="h6">Zingueria Ushuaia</Typography>
      </Grid>
      <Grid item xs={12} md={8} className={styles.linksContainer}>
        <ul className={styles.linkList}>
          <li>
            <NavLink
              to={'/'}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/quienessomos'}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Quienes Somos
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/producto'}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Producto
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/contacto'}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};