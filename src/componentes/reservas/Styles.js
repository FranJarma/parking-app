import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    titulo: {
        fontFamily: "Roboto Condensed, sans-serif",
        textTransform: "uppercase",
        fontSize: 25,
        textAlign: "center"
    },
    alerta:{
        position: "relative",
        marginLeft: "1rem",
        marginRight: "1rem",
        borderRadius: 0
    },
    cantidad: {
        fontFamily: "Roboto Condensed, sans-serif",
        color: "#448aff",
        fontSize: 18,
        textTransform: "uppercase",
        marginLeft: "1rem",
        fontWeight: "bold",
        marginBottom: "2rem"
    },
    container: {
        marginLeft: "1rem"
    },
    inputFecha: {
        width: "20rem",
        fontFamily: "Roboto Condensed, sans-serif",
        height:"3rem",
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#4db6ac"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#4db6ac"
        },
    },
    botonConsultar: {
        backgroundColor: "#4db6ac",
        color: "#ffffff",
        fontFamily: "Roboto Condensed, sans-serif",
        textTransform: "uppercase",
        fontSize: 15,
        marginTop: "0.7rem",
        "&:hover":{
            backgroundColor: "#4db6ac",
        }
    },
    subtitulos: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontSize: 16,
        color:"#424242",
    },
    inputCodigo: {
        width: "20rem",
        fontFamily: "Roboto Condensed, sans-serif",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#rgba(0, 0, 0, 0.23)",
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#4db6ac"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#4db6ac"
        },
    },
    cartaReservas: {
        flexGrow: 1,
        paddingLeft: 20,
        backgroundColor: "#FFFFFF",
        boxShadow: "0 2px 3px rgba(0,0,0,0.25), 0 0 3px rgba(0,0,0,0.22)",
        marginLeft: "1rem",
        marginRight: "1rem"
    },
    botonCambiarReserva: {
        backgroundColor: "#448aff",
        color: "#ffffff",
        fontFamily: "Roboto Condensed, sans-serif",
        textTransform: "uppercase",
        marginTop: "2rem",
        marginBottom: "2rem",
        fontSize: 15,
        "&:hover":{
            backgroundColor: "#448aff",
        }
    },
    botonSiguiente: {
        backgroundColor: "#4db6ac",
        color: "#ffffff",
        fontFamily: "Roboto Condensed, sans-serif",
        textTransform: "uppercase",
        marginTop: "2rem",
        marginBottom: "2rem",
        fontSize: 15,
        "&:hover":{
            backgroundColor: "#4db6ac",
        }
    },
    campos: {
        fontFamily: "Roboto Condensed, sans-serif",
        color: "#9e9e9e",
        [theme.breakpoints.up('md')]:{
            marginLeft: "0.5rem",
        },
        fontSize: 15,
        display: "flex",
        flexWrap: "wrap"
    },
    label: {
        fontSize: "0.8rem",
        paddingBottom: "0.25rem"
    },
    select: {
        fontFamily: "Roboto Condensed, sans-serif",
        paddingRight: "1rem",
        '&:after': {
            borderColor: "#4db6ac",
        }
    },
    input: {
        textTransform: 'capitalize',
        fontFamily: "Roboto Condensed, sans-serif",
        paddingRight: "1rem",
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#4db6ac"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#4db6ac"
        },
    },
    inputReserva: {
        fontFamily: "Roboto Condensed, sans-serif",
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
    tituloModal: {
        color: '#FFFFFF',
        fontFamily: "Roboto Condensed, sans-serif",
        fontSize: 20,
        marginTop: '1rem',
        marginBottom: '1rem',
        marginLeft: '1.5rem'
    },
    tabs: {
        backgroundColor: "#FFFFFF",
        color:"#4db6ac",
        width: "100%"
    },
    tab: {
        fontFamily: 'Roboto Condensed',
        fontHeight: 'bold',
        fontSize: 14,
        [theme.breakpoints.only('xs')]: {
            fontSize: 10
        },
    },
}));
