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

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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

export default function LessonModal({ open, handleClose }) {
    const [age, setAge] = React.useState("");

    const handleChange = event => {
        setAge(event.target.value);
    };
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
                    Add New Lesson
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
                                label="Lesson title"
                                helperText="provide a title for the lesson"
                            />
                        </Grid>

                        <Grid item style={{ marginBottom: 16 }}>
                            <TextField
                                multiline
                                rows={2}
                                fullWidth
                                variant="filled"
                                color="primary"
                                label="Lesson summary"
                                helperText="provide a summary of the lesson"
                            />
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth variant="standard">
                                <InputLabel id="demo-simple-select-outlined-label">
                                    Select Section
                                </InputLabel>
                                <Select
                                    fullWidth
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={age}
                                    onChange={handleChange}
                                    label="Age"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>

                                <FormHelperText>
                                    Please select a section to attach the
                                    lesson.
                                </FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item style={{ marginBottom: 16 }}>
                            <TextField
                                fullWidth
                                variant="filled"
                                color="primary"
                                label="Video URL"
                                helperText="Provide the video url from vimeo,youtube etc..."
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
                        <Typography>Add Lesson</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
