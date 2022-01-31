import React from 'react'
import Navbar from './Navbar'
import Cajon from './Cajon'

import {
    makeStyles
} from '@material-ui/core'


const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Contenedor = () => {

  const classes = estilos()
    
  return (
    <div className={classes.root}>
        <Navbar />
        <Cajon />
        <div className={classes.content}>
            <div className={classes.toolbar}></div>
            contenido
        </div>
    </div>
  )
}

export default Contenedor

