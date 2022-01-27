import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core'

import MenuIcon from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
}))


const Navbar = () => {
    const classes = useStyles()
    return (
        <div>   
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu" className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Pagina Web
                    </Typography>
                    <Button variant="text" color="inherit">
                        Login
                    </Button>
                    <Button variant="text" color="inherit">
                        Ayuda
                    </Button>
                    <Button variant="text" color="inherit">
                        Mas sobre nosotros
                    </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}


export default Navbar