import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core'

import MenuIcon from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
    },
}))


const Navbar = () => {
    const classes = useStyles()
    return (
            <AppBar className={classes.appBar}>
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
    )
}


export default Navbar