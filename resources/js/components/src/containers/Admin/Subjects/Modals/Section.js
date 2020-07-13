import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Container, Grid, TextField } from "@material-ui/core";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2)
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500]
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1)
    }
}))(MuiDialogActions);

export default function CustomizedDialogs({ open, handleClose }) {
    return (
        <div>
            <Dialog
                maxWidth="xs"
                fullWidth
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add New Section
                </DialogTitle>
                <DialogContent dividers>
                    <Grid
                        container
                        direction="column"
                        style={{ width: "100%" }}
                    >
                        <Grid item style={{ marginBottom: 16 }}>
                            <TextField
                                fullWidth
                                variant="standard"
                                color="primary"
                                label="Section title"
                                helperText="provide a title for the section"
                            />
                        </Grid>

                        <Grid item style={{ marginBottom: 16 }}>
                            <TextField
                                multiline
                                rows={2}
                                fullWidth
                                variant="filled"
                                color="primary"
                                label="Section description"
                                helperText="provide a description"
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        disableElevation
                        variant="contained"
                        color="primary"
                    >
                        <Typography>Add Section</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
