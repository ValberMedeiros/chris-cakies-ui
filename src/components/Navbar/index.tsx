import * as React from 'react';

import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {Menu} from "./Menu";
import titulo from "../../assets/images/titulo.png"

const useStyles = makeStyles((theme) => ({
    toolbar: {
      backgroundColor: 'rgb(165, 71, 236)'
    },
    titulo: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
        maxWidth: 140,
        height: 40,
        [theme.breakpoints.up('sm')]: {
            width: 240,
        }
    }
}));

export const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Menu></Menu>
                <Typography className={classes.titulo}>
                    <img src={titulo} alt="Chris Cakes" className={classes.logo} />
                </Typography>
            </Toolbar>
        </AppBar>
    );
};