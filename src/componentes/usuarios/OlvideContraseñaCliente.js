import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Toast from '../diseño/Toast';
import {useStyles} from './Styles';
import firebase from './../../firebase';
import traducirError from './../../firebase/errores';
import * as CGeneral from './../../constantes/general/CGeneral';
import * as CAuth from '../../constantes/auth/CAuth';
import Swal from '../diseño/Swal';
const OlvideContraseñaCliente = ({cerrarModal}) => {
    const classes = useStyles();
    useEffect(()=> {
        localStorage.removeItem('infoPersona');
        localStorage.removeItem('infoReserva');
        localStorage.removeItem('fecha');
    });
    //state para manejar el contenido de los inputs
    const [usuario, guardarUsuario] = useState({
        email: '',
    })
    //guardamos el contenido del state en los inputs
    const { email } = usuario;
    //evento onChange
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }
    async function recuperarContraseña () {
        try {
            if(email === '') {
                Toast(CGeneral.COMPLETE_TODOS_LOS_CAMPOS)
            }
            else {
                await firebase.recuperarContraseña(email);
                Swal(CGeneral.OPERACION_COMPLETADA, CAuth.SE_HA_ENVIADO_CORREO);
                cerrarModal();
            }
        } catch (error) {
            Toast(traducirError(error.code));
        }
    }
    return ( 
    <Grid container spacing={3}> 
        <Grid item xs={12} md={12} lg={12}>
        <br/>
            <TextField
            onChange={onChange}
            value={email}
            name="email"
            autoFocus
            variant="outlined"
            fullWidth
            className={classes.inputUsuarioCliente}
            label="Ingrese correo electrónico"></TextField>
        </Grid>
        <Button
        onClick={recuperarContraseña}
        className={classes.botonIniciarSesion}>Recuperar contraseña
        </Button>
    </Grid>
    );
}
 
export default OlvideContraseñaCliente;