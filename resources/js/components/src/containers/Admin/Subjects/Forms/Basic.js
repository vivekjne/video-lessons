import React, { useState } from "react";
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
const subjectOptions = ["Physics", "Chemistry", "Maths"];

function BasicForm(step) {
    const classes = useStyles();
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");

    const [curricullums, setCurricullums] = useState("");
    const [classrooms, setClassrooms] = useState("");

    const [selectedClassrooms, setSelectedClassrooms] = useState([]);

    const handleChange = value => {
        console.log(value);
        setText(value);
    };

    const handleSelectChange = e => {
        const { target } = e;
        let newItems;

        if (target.name == "curricullums") {
            setCurricullums(target.value);
        } else if (target.name == "classrooms") {
            setClassrooms(target.value);
        }
        // const itemIndex = newItems.findIndex(item => item === target.value);
        // itemIndex !== -1
        //     ? newItems.splice(itemIndex, 1)
        //     : newItems.push(target.value);
        // if (target.name == "curricullums") {
        //     setSelectedCurricullums(newItems);
        // } else if (target.name == "classrooms") {
        //     setSelectedClassrooms(newItems);
        // }
    };

    const onAddClassroomCurricullum = () => {
        console.log("add");
        let newClassrooms = [...selectedClassrooms];
        if (curricullums && classrooms) {
            newClassrooms.push(`${curricullums} - ${classrooms}`);
        }
        setSelectedClassrooms(newClassrooms);
    };

    const onDelete = index => {
        let newSelectedClassrooms = [...selectedClassrooms];
        newSelectedClassrooms.splice(index, 1);
        setSelectedClassrooms(newSelectedClassrooms);
    };
    return (
        <Grid container direction="column">
            <Grid className={classes.inputSpacer} item>
                <Autocomplete
                    id="combo-box-demo"
                    options={subjectOptions}
                    getOptionLabel={option => option}
                    onChange={(e, newValue) => setTitle(newValue)}
                    value={title}
                    fullWidth
                    freeSolo
                    renderInput={params => (
                        <TextField
                            fullWidth
                            {...params}
                            label="Subject Title"
                            variant="standard"
                            helperText="*Choose from a list of available subjects or type to add a new one."
                        />
                    )}
                />
                {/* <TextField fullWidth label="Subject title" variant="standard" /> */}
            </Grid>

            <Grid className={classes.inputSpacer} item>
                <TextField
                    fullWidth
                    label="Subject display name"
                    variant="standard"
                />
            </Grid>

            <Grid className={classes.inputSpacer} item>
                <TextField
                    fullWidth
                    label="Short description"
                    variant="filled"
                    multiline
                    rows={3}
                />
            </Grid>

            <Grid className={classes.inputSpacer} item>
                <div style={{ marginBottom: 32 }}>
                    <ReactQuill
                        style={{ height: 150 }}
                        value={text}
                        onChange={handleChange}
                    />
                </div>
            </Grid>
            <Grid className={classes.inputSpacer} item xs={12}>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={5}>
                        <FormControl fullWidth className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Curricullum
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="curricullums"
                                onChange={handleSelectChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={5}>
                        <FormControl fullWidth className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">
                                Classroom
                            </InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="classrooms"
                                onChange={handleSelectChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={2}>
                        <Button
                            onClick={onAddClassroomCurricullum}
                            color="primary"
                            variant="text"
                        >
                            <Typography>Add</Typography>
                        </Button>
                    </Grid>
                    <Grid item>
                        <div style={{ display: "flex", marginRight: 8 }}>
                            {selectedClassrooms.map((classroom, index) => (
                                <Chip
                                    style={{ marginRight: 16 }}
                                    color="primary"
                                    key={classroom + index}
                                    variant="outlined"
                                    label={classroom}
                                    onDelete={() => onDelete(index)}
                                ></Chip>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default BasicForm;
