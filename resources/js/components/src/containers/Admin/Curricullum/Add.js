import React from "react";
import TextField from "../../../components/Inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Heading from "../../../components/layout/Heading";

import Button from "../../../components/Inputs/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import CircularProgress from "@material-ui/core/CircularProgress";
import Axios from "axios";
import { useHistory, useRouteMatch } from "react-router-dom";
import curricullumClient from "../../../api/curricullumClient";
const CurricullumAdd = () => {
    const [submitted, setSubmitted] = React.useState(false);
    const [isSubmitting, setSubmitting] = React.useState(false);
    const history = useHistory();
    const { path, url } = useRouteMatch();
    async function createCurricullum(data, formik) {
        console.log(data);
        try {
            const response = await curricullumClient.addCurricullum(data);

            console.log(response.data);
            history.push(`/admin/curricullums`);
        } catch (err) {
            console.log("response", err.response);
            if (err.response.data.errors) {
                if (err.response.data.errors.name) {
                    formik.setFieldError(
                        "name",
                        err.response.data.errors.name[0]
                    );
                }
            }
        }
        setSubmitting(false);
    }
    return (
        <>
            <Heading title="Add Curriclullum" disableAction />
            <Formik
                initialValues={{ name: "" }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(200)
                        .required("Required")
                })}
                onSubmit={(values, formik) => {
                    setSubmitting(true);
                    createCurricullum(values, formik);
                }}
            >
                {formik => (
                    <form
                        onSubmit={formik.handleSubmit}
                        style={{ marginTop: 24 }}
                    >
                        <Paper elevation={2}>
                            <Container maxWidth="sm">
                                <Grid container direction="column" spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            variant="standard"
                                            label="Curricullum Title"
                                            id="name"
                                            helperText={formik.errors.name}
                                            {...formik.getFieldProps("name")}
                                            error={
                                                formik.touched.name &&
                                                formik.errors.name
                                            }
                                            // helperText="Incorrect entry."
                                        />
                                    </Grid>
                                    <Grid item>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "flex-end"
                                            }}
                                        >
                                            <Button
                                                type="submit"
                                                size="large"
                                                variant="contained"
                                                disabled={isSubmitting}
                                            >
                                                <Typography>
                                                    Submit
                                                    {isSubmitting && (
                                                        <CircularProgress
                                                            style={{
                                                                marginLeft: 8
                                                            }}
                                                            size={12}
                                                        />
                                                    )}
                                                </Typography>
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Paper>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default CurricullumAdd;
