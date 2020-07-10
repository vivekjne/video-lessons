import React from "react";
import TextField from "../../../components/Inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Heading from "../../../components/layout/Heading";

import Button from "../../../components/Inputs/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";
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

function getStepContent(step) {
    const classes = useStyles();
    switch (step) {
        case 0:
            return <BasicForm />;
        case 1:
            return <MediaForm />;
        case 2:
            return <SeoForm />;
        default:
            throw new Error("Unknown step");
    }
}

const SubjectAdd = () => {
    const history = useHistory();
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [message, setMessage] = React.useState(false);

    const handleNext = () => {
        if (activeStep == steps.length - 1) {
            setMessage("Subject added successfully!");
            setIsSuccess(true);

            history.push("/admin/subjects/1");
        }
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <>
            <Heading title="Add Subject" disableAction />

            <Paper elevation={2} className={classes.paper}>
                <Typography component="h1" variant="h4" align="center">
                    Checkout
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <React.Fragment>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed
                                your order confirmation, and will send you an
                                update when your order has shipped.
                            </Typography>
                        </React.Fragment>
                    ) : (
                        <Container maxWidth="sm">
                            {getStepContent(activeStep)}
                            <div className={classes.buttons}>
                                {activeStep !== 0 && (
                                    <MaterialButton
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </MaterialButton>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1
                                        ? "Submit"
                                        : "Next"}
                                </Button>
                            </div>
                        </Container>
                    )}
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
