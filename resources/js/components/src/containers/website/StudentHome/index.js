import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";
import { grey, purple } from "@material-ui/core/colors";

import IconButton from "@material-ui/core/IconButton";
import FavoriteOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import TimelapseOutlined from "@material-ui/icons/TimelapseOutlined";
import OndemandVideoOutlined from "@material-ui/icons/OndemandVideoOutlined";
// import subjectClient from "../../../api/subjectClient";

import CustomPaper from "../../../components/website/Cards/Custom";
import SubjectCard from "../../../components/website/Cards/SubjectCard";
import { BounceLoader } from "react-spinners";
import Axios from "axios";
import { Route, Switch } from "react-router-dom";
import SubjectDetail from "../SubjectDetail";
const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
        background:
            "linear-gradient(to right, rgba(142, 45, 226, 0.6), rgba(74, 0, 224, 0.6))"
    }
}));

export default function StudentHome() {
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function fetchInitialData() {
            try {
                const response = await Axios.get("/api/subjects");
                setData(response.data.data);
                console.log(response);
                // setData(response.data.data);
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        }

        fetchInitialData();
    }, []);
    return (
        <>
            <AppBar
                style={{ background: purple[900] }}
                elevation={0}
                position="fixed"
            >
                <Toolbar>
                    <Typography>Video Lessons</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />

            <Switch>
                <Route exact path="/">
                    <Toolbar />

                    <Container maxWidth="lg">
                        <Grid container spacing={2}>
                            {data.map(c => (
                                <Grid
                                    item
                                    style={{ marginBottom: 32 }}
                                    key={c.id}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    xl={4}
                                >
                                    <SubjectCard item={c} />
                                </Grid>
                            ))}
                        </Grid>
                        <Backdrop className={classes.backdrop} open={loading}>
                            <BounceLoader color="#fff" />
                        </Backdrop>
                    </Container>
                </Route>
                <Route path="/subject/:slug/:id/lesson/:slug/:id">
                    lessons
                </Route>

                <Route path="/subject/:slug/:id">
                    <SubjectDetail />
                </Route>
            </Switch>
        </>
    );
}
