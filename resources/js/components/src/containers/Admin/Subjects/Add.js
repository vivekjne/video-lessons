import React, { useRef, useState } from "react";
import TextField from "../../../components/Inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Heading from "../../../components/layout/Heading";

import Button from "../../../components/Inputs/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";
import { Container, CircularProgress } from "@material-ui/core";
import MultipleSelect from "../../../components/Inputs/MultiSelect";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import MaterialButton from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Add from "@material-ui/icons/Add";
import BasicForm from "./Forms/Basic";
import MediaForm from "./Forms/Media";
import SeoForm from "./Forms/Seo";
import { useHistory } from "react-router-dom";
import CustomSnackbar from "../../../components/layout/CustomSnackbar";
import { Formik } from "formik";
import * as Yup from "yup";
import subjectClient from "../../../api/subjectClient";
import curricullumClient from "../../../api/curricullumClient";
import classroomClient from "../../../api/classroomClient";
import Axios from "axios";

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
        marginBottom: theme.spacing(2)
    }
}));

const steps = ["Basic", "Media", "Seo"];

const SubjectAdd = () => {
    const history = useHistory();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const [isSubmitted, setSubmitted] = React.useState(false);
    const [isLoading, setLoading] = React.useState(true);
    const [curricullums, setCurricullums] = React.useState([]);
    const [classrooms, setClassrooms] = React.useState([]);
    const [basicForm, setBasicForm] = useState({
        name: "",
        display_name: "",
        short_description: "",
        description: "",
        classroom_id: undefined,
        curricullum_id: undefined
    });

    const [mediaForm, setMediaForm] = useState({
        preview_url: ""
    });

    const [seoForm, setSeoForm] = useState({
        meta_tags: [],
        meta_description: ""
    });
    const handleNext = () => {
        if (activeStep == steps.length - 1) {
            setMessage("Subject added successfully!");
            setIsSuccess(true);
        }
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    React.useEffect(() => {
        async function getInitialData() {
            try {
                const curricullumResponse = await curricullumClient.getCurricullums();
                const classroomResponse = await classroomClient.getClassrooms();
                setCurricullums(curricullumResponse.data.data);
                setClassrooms(classroomResponse.data.data);
            } catch (err) {
                console.log(err);
            }

            setLoading(false);
        }

        getInitialData();
    }, []);

    return (
        <>
            <Heading title="Add Subject" disableAction />

            <Paper elevation={2} className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Add New Subject
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    <Container maxWidth="md">
                        {isLoading ? (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <CircularProgress />
                            </div>
                        ) : (
                            <>
                                {activeStep == 0 && (
                                    <Formik
                                        initialValues={basicForm}
                                        validationSchema={Yup.object({
                                            name: Yup.string()
                                                .max(200)
                                                .required(),
                                            display_name: Yup.string()
                                                .max(200)
                                                .required(),
                                            short_description: Yup.string().max(
                                                255
                                            ),
                                            description: Yup.string().max(2000),
                                            curricullum_id: Yup.number().required(),
                                            classroom_id: Yup.number().required()
                                        })}
                                        onSubmit={(values, formik) => {
                                            console.log({ values });
                                            setBasicForm(values);
                                            handleNext();
                                        }}
                                    >
                                        {formik => (
                                            <form
                                                onSubmit={formik.handleSubmit}
                                            >
                                                <BasicForm
                                                    classrooms={classrooms}
                                                    curricullums={curricullums}
                                                    formik={formik}
                                                />
                                                <div
                                                    className={classes.buttons}
                                                >
                                                    {/* <MaterialButton
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </MaterialButton> */}

                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        // onClick={handleNext}
                                                        className={
                                                            classes.button
                                                        }
                                                    >
                                                        Next
                                                    </Button>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                )}

                                {activeStep == 1 && (
                                    <Formik
                                        initialValues={mediaForm}
                                        validationSchema={Yup.object({
                                            preview_url: Yup.string()
                                        })}
                                        onSubmit={(values, formik) => {
                                            console.log({ values });
                                            setMediaForm(values);
                                            handleNext();
                                        }}
                                    >
                                        {formik => (
                                            <form
                                                onSubmit={formik.handleSubmit}
                                            >
                                                <MediaForm formik={formik} />
                                                <div
                                                    className={classes.buttons}
                                                >
                                                    <MaterialButton
                                                        onClick={handleBack}
                                                        className={
                                                            classes.button
                                                        }
                                                    >
                                                        Back
                                                    </MaterialButton>

                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        // onClick={handleNext}
                                                        className={
                                                            classes.button
                                                        }
                                                    >
                                                        Next
                                                    </Button>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                )}

                                {activeStep == 2 && (
                                    <Formik
                                        initialValues={seoForm}
                                        validationSchema={Yup.object({
                                            meta_tags: Yup.array(),
                                            meta_description: Yup.string()
                                        })}
                                        onSubmit={async (values, formik) => {
                                            setSeoForm(values);

                                            const submitValues = {
                                                ...mediaForm,
                                                ...values,
                                                ...basicForm
                                            };
                                            console.log({
                                                values: submitValues
                                            });
                                            setSubmitted(true);
                                            const formData = new FormData();
                                            Object.keys(submitValues).forEach(
                                                key => {
                                                    formData.append(
                                                        key,
                                                        submitValues[key]
                                                    );
                                                }
                                            );
                                            try {
                                                const response = await Axios.post(
                                                    "/api/subjects",
                                                    formData,
                                                    {
                                                        headers: {
                                                            "Content-Type":
                                                                "multipart/formdata"
                                                        }
                                                    }
                                                );
                                                console.log({
                                                    response: response.data
                                                });
                                                history.push(
                                                    "/admin/subjects/" +
                                                        response.data.data.id
                                                );
                                            } catch (err) {
                                                console.log({ err });
                                            }
                                            setSubmitted(false);
                                        }}
                                    >
                                        {formik => (
                                            <form
                                                onSubmit={formik.handleSubmit}
                                            >
                                                <SeoForm formik={formik} />

                                                <div
                                                    className={classes.buttons}
                                                >
                                                    <MaterialButton
                                                        onClick={handleBack}
                                                        className={
                                                            classes.button
                                                        }
                                                    >
                                                        Back
                                                    </MaterialButton>

                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        color="primary"
                                                        disabled={isSubmitted}
                                                        // onClick={handleNext}
                                                        className={
                                                            classes.button
                                                        }
                                                    >
                                                        Submit{" "}
                                                        {isSubmitted && (
                                                            <CircularProgress
                                                                size={15}
                                                                color="primary"
                                                            />
                                                        )}
                                                    </Button>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                )}
                            </>
                        )}
                    </Container>
                </React.Fragment>
            </Paper>

            <CustomSnackbar
                open={isSuccess}
                message={message}
                handleClose={() => setIsSuccess(false)}
            />
        </>
    );
};

export default SubjectAdd;
