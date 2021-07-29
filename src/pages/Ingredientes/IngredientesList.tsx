
import * as React from 'react';
import {Box, Container, Fab, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import {Table} from "./Table";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    boxCreate: {
        flexGrow: 1,
        textAlign: "right"
    },
    buttonCreate: {
        backgroundColor: 'rgb(165, 71, 236)'
    },
}));

export const IngredientesList = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box className={classes.boxCreate}>
                <Fab
                    title="Adicionar ingrediente"
                    size="small"
                    component={Link}
                    to="/ingredientes/create"
                    className={classes.buttonCreate}
                >
                    <AddIcon />
                </Fab>
            </Box>
            <Box>
                <Table />
            </Box>
        </Container>
    );
};