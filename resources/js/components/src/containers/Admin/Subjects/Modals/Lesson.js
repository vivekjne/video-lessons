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
import { Formik } from "formik";
import * as Yup from "yup";
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

export default function LessonModal({
    open,
    handleClose,
    subject_id,
    sections,
    onSubmitAction
}) {
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    summary: "",
                    subject_id,
                    section_id: null,
                    video_url: ""
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(200)
                        .required(),
                    summary: Yup.string().max(255),
                    section_id: Yup.number(
                        "Please select a section"
                    ).required(),
                    video_url: Yup.string()
                        .url()
                        .required()
                })}
                onSubmit={async (values, formik) => {
                    console.log({ values });
                    setIsSubmitted(true);
                    const isSuccess = await onSubmitAction(values);
                    if (isSuccess) {
                        formik.resetForm();
                    }
                    setIsSubmitted(false);
                }}
            >
                {formik => (
                    <form onSubmit={formik.handleSubmit}>
                        <Dialog
                            maxWidth="xs"
                            fullWidth
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                        >
                            <DialogTitle
                                id="customized-dialog-title"
                                onClose={handleClose}
                            >
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
                                            {...formik.getFieldProps("name")}
                                            helperText={
                                                (formik.touched.name &&
                                                    formik.errors.name) ||
                                                "provide a title for the lesson"
                                            }
                                            error={
                                                formik.touched.name &&
                                                formik.errors.name
                                            }
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
                                            {...formik.getFieldProps("summary")}
                                            helperText={
                                                (formik.touched.summary &&
                                                    formik.errors.summary) ||
                                                "provide a summary of the lesson"
                                            }
                                            error={
                                                formik.touched.summary &&
                                                formik.errors.summary
                                            }
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        item
                                        style={{ marginBottom: 16 }}
                                    >
                                        <FormControl
                                            fullWidth
                                            variant="standard"
                                        >
                                            <InputLabel id="demo-simple-select-outlined-label">
                                                Select Section
                                            </InputLabel>
                                            <Select
                                                fullWidth
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                {...formik.getFieldProps(
                                                    "section_id"
                                                )}
                                                error={
                                                    formik.touched.section_id &&
                                                    formik.errors.section_id
                                                }
                                                label="Age"
                                            >
                                                {sections.map(section => (
                                                    <MenuItem
                                                        value={section.id}
                                                    >
                                                        {section.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>

                                            <FormHelperText>
                                                {(formik.touched.section_id &&
                                                    formik.errors.section_id) ||
                                                    "Please select a section to attach the lesson."}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    <Grid item style={{ marginBottom: 16 }}>
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            color="primary"
                                            label="Video URL"
                                            {...formik.getFieldProps(
                                                "video_url"
                                            )}
                                            helperText={
                                                (formik.touched.video_url &&
                                                    formik.errors.video_url) ||
                                                "Provide the video url from vimeo,youtube etc..."
                                            }
                                            error={
                                                formik.touched.video_url &&
                                                formik.errors.video_url
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    type="submit"
                                    onClick={formik.handleSubmit}
                                    disableElevation
                                    variant="contained"
                                    color="primary"
                                >
                                    <Typography>Add Lesson</Typography>
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </form>
                )}
            </Formik>
        </div>
    );
}
