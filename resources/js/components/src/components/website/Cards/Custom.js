import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    frontCard: {
        position: "relative",
        width: "100%",

        padding: theme.spacing(2),

        borderRadius: 10
    },
    backCard: {
        position: "absolute",
        top: 0,
        bottom: -8,
        left: 8,
        right: 8,
        zIndex: -1,
        borderRadius: 10
    }
}));

export default function CustomPaper({ children, height }) {
    const classes = useStyles();

    return (
        <Paper
            elevation={0}
            variant="outlined"
            className={classes.frontCard}
            style={{ height }}
        >
            <Paper
                elevation={0}
                variant="outlined"
                className={classes.backCard}
            />
            {children}
        </Paper>
    );
}
