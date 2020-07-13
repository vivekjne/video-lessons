import React from "react";
import TextField from "../../../components/Inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Heading from "../../../components/layout/Heading";

import Button from "../../../components/Inputs/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import { useHistory, useRouteMatch } from "react-router-dom";

import MultipleSelect from "../../../components/Inputs/MultiSelect";
import curricullumClient from "../../../api/curricullumClient";
import { Formik } from "formik";
import * as Yup from "yup";
import classroomClient from "../../../api/classroomClient";

const ClassroomAdd = () => {
    const [curricullums, setCurricullums] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isSubmitting, setSubmitting] = React.useState(false);
    const history = useHistory();

    const handleChange = (event, formik) => {
        const value = event.target.value;

        setSelected(value);
        formik.setFieldValue("curricullum_ids", value);
    };

    const handleChangeMultiple = event => {
        const { options } = event.target;

        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                const curricullumIndex = curricullums.findIndex(
                    c => c.id === options[i].value
                );
                if (curricullumIndex !== -1) {
                    value.push(curricullums[curricullumIndex]);
                }
            }
        }

        setSelected(value);
    };

    async function fetchCurricullums() {
        try {
            const response = await curricullumClient.getCurricullums();
            console.log({ response: response.data });
            setCurricullums(response.data.data);
        } catch (err) {
            console.log(err.response);
        }

        setIsLoading(false);
    }

    React.useEffect(() => {
        fetchCurricullums();
    }, []);

    async function createClassroom(data, formik) {
        console.log(data);
        try {
            const curricullum_ids = selected.map(s => s.id);
            data.curricullum_ids = curricullum_ids;
            const response = await classroomClient.addClassroom(data);

            console.log(response.data);
            history.push(`/admin/classrooms`);
        } catch (err) {
            console.log("response", err.response);
            if (err.response.data.errors) {
                if (err.response.data.errors.name) {
                    formik.setFieldError(
                        "name",
                        err.response.data.errors.name[0]
                    );
                }

                if (err.response.data.errors.curricullum_ids) {
                    formik.setFieldError(
                        "curricullum_ids",
                        err.response.data.errors.curricullum_ids[0]
                    );
                }
            }
        }
        setSubmitting(false);
    }
    return (
        <>
            <Heading title="Add Classroom" disableAction />
            <Formik
                initialValues={{ name: "" }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .max(200)
                        .required()
                    // curricullum_ids: Yup.array().required()
                })}
                onSubmit={(values, formik) => {
                    setSubmitting(true);
                    createClassroom(values, formik);
                }}
            >
                {formik => (
                    <form
                        onSubmit={formik.handleSubmit}
                        style={{ marginTop: 24 }}
                    >
                        <Paper elevation={2}>
                            {!isLoading ? (
                                <Container maxWidth="sm">
                                    <Grid
                                        container
                                        direction="column"
                                        spacing={3}
                                    >
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                variant="standard"
                                                label="Classroom Title"
                                                name="name"
                                                helperText={formik.errors.name}
                                                {...formik.getFieldProps(
                                                    "name"
                                                )}
                                                error={
                                                    formik.touched.name &&
                                                    formik.errors.name
                                                }
                                                // helperText="Incorrect entry."
                                            />
                                        </Grid>

                                        {/* <Grid item>
                                            <MultipleSelect
                                                error={
                                                    formik.touched.name &&
                                                    formik.errors
                                                        .curricullum_ids
                                                }
                                                label="Curricullums"
                                                data={curricullums}
                                                selected={selected}
                                                handleChange={e =>
                                                    handleChange(e, formik)
                                                }
                                                handleChangeMultiple={
                                                    handleChangeMultiple
                                                }
                                            />
                                        </Grid> */}
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
                                                >
                                                    <Typography>
                                                        Submit
                                                    </Typography>
                                                </Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            ) : (
                                <CircularProgress color="primary" />
                            )}
                        </Paper>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default ClassroomAdd;
