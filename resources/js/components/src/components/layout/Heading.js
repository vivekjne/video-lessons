import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { teal } from "@material-ui/core/colors";
const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}));

const ActionButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: teal[500],
        "&:hover": {
            backgroundColor: teal[700]
        }
    }
}))(Button);

const Heading = ({ title, action, actionLabel, disableAction }) => {
    const classes = useStyles();
    return (
        <Paper elevation={2} className={classes.root}>
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <Typography variant="h4" color="textSecondary">
                        {title}
                    </Typography>
                </Grid>
                <Grid item>
                    {!disableAction && (
                        <ActionButton
                            component={Link}
                            to={action}
                            variant="contained"
                            disableElevation
                            startIcon={<AddIcon />}
                        >
                            <Typography>{actionLabel}</Typography>
                        </ActionButton>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Heading;
