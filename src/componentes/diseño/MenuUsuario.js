import React, {useState, useContext, useEffect} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { makeStyles, Button, Typography, Popover } from '@material-ui/core';
import {FirebaseContext} from './../../firebase';
import * as CAuth from './../../constantes/auth/CAuth';
import { Link, useHistory } from 'react-router-dom';
import Toast from './Toast';
import traducirError from './../../firebase/errores';
import SpinnerContext from '../../context/spinner/spinnerContext';
import useInfoUsuario from '../../hooks/useInfoUsuario';

const useStyles = makeStyles(theme => ({
  menuPrincipal: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
  },
  menu: {
    borderRadius: -5,
  },
  menuItem: {
    width: '12rem',
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: 16,
    textDecoration: "none",
    color: "#000000"
  },
  menuBoton: {
    paddingTop: 10,
  },
  usuario: {
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: 16,
    marginLeft: '1rem'
  },
  iconoUsuario: {
    width: "3rem",
    height: "3rem"
  },
  iconos: {
    color: "#4db6ac",
  },
  titulosMenu: {
    fontFamily: "Roboto Condensed, sans-serif",
    fontSize: 16,
    textDecoration: "none",
    color: "#000000"
},
}));
const MenuUsuario = () => {
  const [posicion, setearPosicion] = useState(null);
  const open = Boolean(posicion);
  const classes = useStyles();
  const history = useHistory();
  const usuarioInfo = useInfoUsuario();
  const {firebase} = useContext(FirebaseContext);
  const spinnerContext = useContext(SpinnerContext);
  const { mostrarSpinner } = spinnerContext;
  const handleMenu = e => {
    setearPosicion(e.currentTarget);
  };
  const handleCerrar = () => {
    setearPosicion(null);
  };
  //función para cerrar sesión
  async function cerrarSesion(){
    try {
        await firebase.cerrarSesion();
        mostrarSpinner(CAuth.CERRANDO_SESION);
        history.push('/');
    }
    catch (error) {
        Toast(traducirError(error.code))
    }
  }

    return ( 
        <div className={classes.menuPrincipal}>
        <Button
          onClick={handleMenu}
          className={classes.menuBoton}
          color='inherit'
        >
          <AccountCircle className={classes.iconoUsuario}/>
          <Typography className={classes.usuario}>{usuarioInfo.nombreCompleto}</Typography>
        </Button>
        <Popover
          id="menu-usuario"
          className={classes.menu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          anchorEl={posicion}
          keepMounted
          open={open}
          onClose={handleCerrar}
        >
          <Link to={'/datos-personales'} className={classes.titulosMenu}>
            <MenuItem className={classes.menuItem}>
              <div style={{ display: 'flex', justifyContent: 'center'}}>
                <PersonIcon className={classes.iconos} />
                <div>{CAuth.MIS_DATOS}</div>
              </div>
            </MenuItem>
          </Link>
          <MenuItem className={classes.menuItem} onClick={cerrarSesion}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <ExitToAppIcon className={classes.iconos} />
              <div>{CAuth.CERRAR_SESION}</div>
            </div>
          </MenuItem>
        </Popover>
        
      </div>
     );
}
 
export default MenuUsuario;