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

import ChipInput from "material-ui-chip-input";

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

function SeoForm(step) {
    const classes = useStyles();
    const [text, setText] = useState("");
    const [chips, setChips] = useState([]);
    const thumbnailRef = useRef();

    function handleAddChip(chip) {
        const newChips = [...chips];
        newChips.push(chip);
        setChips(newChips);
    }

    function handleDeleteChip(chip, index) {
        const newChips = [...chips];
        newChips.splice(index, 1);
        setChips(newChips);
    }
    return (
        <Grid container direction="column">
            <Grid className={classes.inputSpacer} item>
                <ChipInput
                    fullWidth
                    label="meta tags"
                    value={chips}
                    onAdd={chip => handleAddChip(chip)}
                    onDelete={(chip, index) => handleDeleteChip(chip, index)}
                    helperText="Write a keyword and press enter"
                />
            </Grid>

            <Grid className={classes.inputSpacer} xs={12} item>
                <TextField
                    fullWidth
                    label="meta description"
                    variant="filled"
                    multiline
                    rows={3}
                />
            </Grid>
        </Grid>
    );
}

export default SeoForm;
