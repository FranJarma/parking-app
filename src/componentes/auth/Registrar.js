import React, { useContext, useState } from 'react';
import { Button, Divider, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import logo from './../../imagenes/logo.png';
import {Link, useHistory } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Spinner from './../diseño/Spinner';

import SpinnerContext from '../../context/spinner/spinnerContext';
import firebase from './../../firebase';
import traducirError from './../../firebase/errores';
import swal from 'sweetalert2';
import Footer from '../diseño/Footer';

const useStyles = makeStyles( theme => ({
    cartaLogin: {
        [theme.breakpoints.up('lg')]:{
            margin:"auto",
            height: 480,
            width: 600,
            marginTop: "2rem",
        },
        [theme.breakpoints.down('md')]:{
            margin: "auto",
            height: 480,
            width: 350,
            marginTop: "3rem",
        },
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
    cartaEncabezado: {
        backgroundColor: "#4db6ac",
    },
    icono: {
        color: "#ffffff",
        float:"right",
    },
    tituloCarta:{
        fontFamily: "Roboto Condensed, sans-serif",
        textTransform: "uppercase",
        color: "#ffffff",
        fontSize: 30
    },
    subtituloCarta:{
        fontFamily: "Roboto Condensed, sans-serif",
        color: "#ffffff",
        fontSize: 15
    },
    botonRegistrarUsuario: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontSize: 15,
        backgroundColor: "#4db6ac",
        color:'#FFFFFF',
        marginLeft: 20,
        width: "90%",
        "&:hover":{
            backgroundColor: "#4db6ac"
        }
    },
    botonVolver: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontSize: 15,
        marginLeft: 20,
        width: "90%",
        "&:hover":{
            backgroundColor: "#f5f5f5"
        }
    },
    inputCarta: {
        width: "90%",
        fontFamily: "Roboto Condensed, sans-serif",
        marginLeft: 20,
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#rgba(0, 0, 0, 0.23);"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4db6ac;"
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#4db6ac"
        }
    },
    logo: {
        marginTop: "1rem",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        [theme.breakpoints.down('lg')]:{
            width: 200,
        },
        [theme.breakpoints.up('lg')]:{
            width: 250,
        },
    },
    tituloSwal: {
        fontFamily: "Roboto Condensed, sans-serif",
    }
}));

const Registrar = () => {
    const classes = useStyles();
    const history = useHistory();
    const spinnerContext = useContext(SpinnerContext);
    const { cargando } = spinnerContext;
    //state para manejar el contenido de los inputs
    const [usuario, guardarUsuario] = useState({
        nombreCompleto: '',
        email: '',
        contraseña: '',
    })
    //guardamos el contenido del state en los inputs
    const { nombreCompleto, email, contraseña } = usuario;
    //evento onChange
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }
    //función para iniciar sesión
    async function registrarUsuario() {
        try {
            if(nombreCompleto === '' || email === '' || contraseña === ''){
                const Toast = swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', swal.stopTimer)
                      toast.addEventListener('mouseleave', swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: 'warning',
                    title: '<a style="font-family: Roboto Condensed">Complete todos los campos</a>'
                  })
            }
            else{
                await firebase.registrarUsuario(nombreCompleto, email, contraseña);
                swal.fire({
                    title: '<a style="font-family: Roboto Condensed">Operación completada</a>',
                    icon: 'success',
                    html: '<p style="font-family: Roboto Condensed">Se ha registrado el usuario. Ahora puede iniciar sesión.</p>'
                })
                history.push('/')
            }
        }
        catch (error) {
            console.log(error);
            const Toast = swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', swal.stopTimer)
                  toast.addEventListener('mouseleave', swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'warning',
                title: `<a style="font-family: Roboto Condensed">${traducirError(error.code)}</a>`
              })
        }
    }
    return ( 
    (!cargando ? 
    <>
        <div>
            <img src={logo} alt="" className={classes.logo}></img>
        </div>
        <Card className={classes.cartaLogin}>
            <CardContent className={classes.cartaEncabezado}>
                <Typography className={classes.tituloCarta}>Nuevo usuario</Typography>
                <PersonAddIcon className={classes.icono}></PersonAddIcon>
                <Typography className={classes.subtituloCarta}>Ingrese datos</Typography>
            </CardContent>
            <Divider></Divider>
            &nbsp;
            <form>
                <Grid>
                    <Grid item>
                        <TextField
                            className = {classes.inputCarta}
                            type="text"
                            autoFocus
                            value={nombreCompleto}
                            name="nombreCompleto"
                            variant="outlined"
                            label="Nombre completo"
                            onChange={onChange}
                        ></TextField>
                    </Grid>
                    &nbsp;
                    <Grid item>
                        <TextField
                            className = {classes.inputCarta}
                            type="text"
                            value={email}
                            name="email"
                            variant="outlined"
                            label="Email"
                            onChange={onChange}
                        ></TextField>
                    </Grid>
                    &nbsp;
                    <Grid item>
                        <TextField
                            className = {classes.inputCarta}
                            type="password"
                            value={contraseña}
                            name="contraseña"
                            variant="outlined"
                            label="Contraseña"
                            onChange={onChange}
                        ></TextField>
                    </Grid>
                    &nbsp;
                    <Grid item>
                    <Button
                        className={classes.botonRegistrarUsuario}
                        variant="contained"
                        onClick={registrarUsuario}
                    >Registrar usuario
                    </Button>
                    </Grid>
                    &nbsp;
                    <Grid item>
                    <Link to={'/'} style={{textDecoration: 'none'}}>
                    <Button
                        className={classes.botonVolver}
                    >Volver
                    </Button>
                    </Link>
                    </Grid>
                </Grid>
            </form>
        </Card>
    <Footer></Footer>
    </>
    :<Spinner></Spinner>)
    );
}
 
export default Registrar;