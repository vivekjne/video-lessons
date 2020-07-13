import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Button from "@material-ui/core/Button";
import BookOutlined from "@material-ui/icons/BookOutlined";
import RoomOutlined from "@material-ui/icons/RoomServiceOutlined";
import OndemandVideoOutlined from "@material-ui/icons/OndemandVideoOutlined";

import { makeStyles } from "@material-ui/core/styles";

import { indigo, grey } from "@material-ui/core/colors";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import TimelineSections from "./TimeLineSections";

const useStyles = makeStyles(theme => ({
    bannerContainer: {
        height: "50vh",
        background: "rgba(74, 0, 224, 1)"
    },
    bannerGrid: {
        height: "50vh",
        color: "#fff"
    },
    bannerButton: { background: "#fff", height: "40px" }
}));
export default function SubjectDetail() {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <>
            <div className={classes.bannerContainer}>
                <Container maxWidth="md">
                    <Grid
                        direction="column"
                        className={classes.bannerGrid}
                        container
                        alignItems={matches ? "center" : "flex-start"}
                        justify="center"
                    >
                        <Grid item>
                            <Typography variant={matches ? "h2" : "h1"}>
                                Physics
                            </Typography>
                        </Grid>

                        <Grid item style={{ margin: "16px 0" }}>
                            <Typography
                                align={matches ? "center" : "left"}
                                variant={matches ? "h6" : "h5"}
                                style={{ opacity: "0.6" }}
                            >
                                Easily the most notable feature in this release
                                is the addition of some hooks (for React 16.8
                                users, ofc). We are excited about the ability
                                that hooks give us to.
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Button
                                variant="contained"
                                className={classes.bannerButton}
                            >
                                <Typography color={indigo[500]}>
                                    Start Watching
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Paper style={{ padding: theme.spacing(2) }} variant="outlined">
                <Grid
                    container
                    justify={matches ? "center" : "flex-start"}
                    spacing={2}
                >
                    <Grid item>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <BookOutlined
                                color="inherit"
                                style={{
                                    fontSize: 28,
                                    color: grey[600],
                                    marginRight: 8
                                }}
                            />
                            <Typography
                                variant="body1"
                                style={{ color: grey[600] }}
                                component="span"
                            >
                                CBSE
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <RoomOutlined
                                color="inherit"
                                style={{
                                    fontSize: 28,
                                    color: grey[600],
                                    marginRight: 8
                                }}
                            />
                            <Typography
                                variant="body1"
                                style={{ color: grey[600] }}
                                component="span"
                            >
                                Class IX
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <OndemandVideoOutlined
                                color="inherit"
                                style={{
                                    fontSize: 28,
                                    color: grey[600],
                                    marginRight: 8
                                }}
                            />
                            <Typography
                                variant="body1"
                                style={{ color: grey[600] }}
                                component="span"
                            >
                                12 lessons
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Paper>

            <Container maxWidth="lg">
                <Grid container justify="flex-start">
                    <Grid item xs={12} md={8}>
                        {[1, 2, 3, 4, 5].map((d, index) => (
                            <TimelineSections number={index + 1} />
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {/* <TimelineSections /> */}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
