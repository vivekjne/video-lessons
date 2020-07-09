import React from "react";
import TextField from "../../../components/Inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Heading from "../../../components/layout/Heading";

import Button from "../../../components/Inputs/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";
import MaterialButton from "@material-ui/core/Button";
import { useHistory, useRouteMatch } from "react-router-dom";

const ClassroomEdit = () => {
    const history = useHistory();
    console.log(history);
    return (
        <>
            <Heading title="Edit Classroom" disableAction />
            <form style={{ marginTop: 24 }}>
                <Paper elevation={2}>
                    <Container maxWidth="sm">
                        <Grid container direction="column" spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    variant="standard"
                                    label="Curricullum Title"
                                    name="name"
                                    defaultValue={
                                        history.location &&
                                        history.location.state &&
                                        history.location.state.rowData.name
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
                                    <MaterialButton
                                        onClick={() => history.goBack()}
                                        // size="large"
                                        variant="text"
                                        color="primary"
                                    >
                                        <Typography>Go Back</Typography>
                                    </MaterialButton>
                                    <Button
                                        style={{ marginLeft: 8 }}
                                        size="large"
                                        variant="contained"
                                    >
                                        <Typography>Save</Typography>
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </form>
        </>
    );
};

export default ClassroomEdit;
