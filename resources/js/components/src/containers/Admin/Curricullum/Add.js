import React from "react";
import TextField from "../../../components/Inputs/TextField";
import Grid from "@material-ui/core/Grid";
import Heading from "../../../components/layout/Heading";

import Button from "../../../components/Inputs/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { teal } from "@material-ui/core/colors";
import { Container } from "@material-ui/core";

const CurricullumAdd = () => {
    return (
        <>
            <Heading title="Add Curriclullum" disableAction />
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
                                    <Button size="large" variant="contained">
                                        <Typography>Submit</Typography>
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

export default CurricullumAdd;
