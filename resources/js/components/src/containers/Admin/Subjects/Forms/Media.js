import React, { useState, useRef, useReducer } from "react";
import TextField from "../../../../components/Inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";
import MultipleSelect from "../../../../components/Inputs/MultiSelect";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ReactQuill from "react-quill";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ThumbnailCard from "../../../../components/layout/ThumbnailCard";
const useStyles = makeStyles(theme => ({
    appBar: {
        position: "relative"
    },
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3)
        }
    },
    stepper: {
        padding: theme.spacing(3, 0, 5)
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end"
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1)
    },
    inputSpacer: {
        marginBottom: theme.spacing(4)
    },
    formControl: {
        margin: theme.spacing(1)
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

const steps = ["Basic", "Media", "Finish"];
// const subjectOptions = ["Physics", "Chemistry", "Maths"];

function MediaForm({ formik }) {
    const classes = useStyles();
    const [text, setText] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const thumbnailRef = useRef();
    const imageRef = useRef();

    return (
        <Grid container direction="column">
            <Grid className={classes.inputSpacer} item>
                <TextField
                    fullWidth
                    label="Preview Url"
                    variant="standard"
                    {...formik.getFieldProps("preview_url")}
                    helperText={
                        (formik.touched.preview_url &&
                            formik.errors.preview_url) ||
                        "Provide a preview url link for the subject from youtube,vimeo,etc..."
                    }
                    error={
                        formik.touched.preview_url && formik.errors.preview_url
                    }
                />
            </Grid>

            <Grid item style={{ marginBottom: 16 }}>
                <Typography color="textSecondary">
                    Choose Thumbnail Image
                </Typography>
            </Grid>

            <Grid className={classes.inputSpacer} xs={12} item>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <input
                            ref={thumbnailRef}
                            type="file"
                            style={{ display: "none" }}
                            onChange={e =>
                                formik.setFieldValue(
                                    "thumbnail",
                                    e.target.files[0]
                                )
                            }
                        />
                        <ThumbnailCard
                            src={
                                formik.values.thumbnail &&
                                URL.createObjectURL(formik.values.thumbnail)
                            }
                            onClick={() => thumbnailRef.current.click()}
                        />
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </Grid>

            <Grid className={classes.inputSpacer} item>
                {/* <iframe
                    title="vimeo-player"
                    src="https://player.vimeo.com/video/437084563"
                    width="640"
                    height="360"
                    frameborder="0"
                    allowfullscreen
                ></iframe> */}
            </Grid>
        </Grid>
    );
}

export default MediaForm;
