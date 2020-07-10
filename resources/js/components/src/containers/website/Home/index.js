import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import VideoLibrary from "@material-ui/icons/VideoLibrary";

import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CustomButton, {
    FullButton
} from "../../../components/website/Inputs/CustomButton";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dropdown from "../../../components/website/Navigation/Dropdown";
import { Paper } from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    headerContainer: {
        height: "60vh",
        // background: "red",
        width: "100%",
        position: "relative",
        backgroundSize: "cover",
        background:
            "linear-gradient(to right, rgba(142, 45, 226, 0.6), rgba(74, 0, 224, 0.6)),url('https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500') no-repeat fixed center"
    },
    brandIcon: {
        color: "#efefef"
        // fontSize: 32
    },
    navText: {
        color: theme.palette.common.white,
        textTransform: "none"
    }
}));

const renderMarketing = () => (
    <Grid item xs={12} sm={4}>
        <Grid container wrap="nowrap" justify="center" alignItems="center">
            <Grid item>
                <div
                    style={{
                        width: 80,
                        height: 80,
                        background: "purple",
                        borderRadius: 40,
                        marginRight: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <VideoLibrary style={{ color: "#fff", fontSize: 32 }} />
                </div>
            </Grid>
            <Grid item>
                <Typography variant="h6">8000+ Courses</Typography>

                <Typography color="textSecondary" variant="body2">
                    Explore a wide range of skills
                </Typography>
            </Grid>
        </Grid>
    </Grid>
);

export default function Home() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className={classes.headerContainer}>
                <Container style={{ height: "100%" }} maxWidth="lg">
                    <AppBar
                        variant="elevation"
                        elevation={0}
                        color="transparent"
                    >
                        <Toolbar>
                            <IconButton edge="start">
                                <MenuIcon className={classes.brandIcon} />
                            </IconButton>
                            <Button autoCapitalize={false} variant="text">
                                <Typography
                                    className={classes.navText}
                                    variant="h6"
                                >
                                    Home
                                </Typography>
                            </Button>

                            <Dropdown label="Clasrooms" />

                            <Dropdown label="Subjects" />

                            <div style={{ flexGrow: 1 }}></div>

                            <Button
                                style={{ marginRight: 8 }}
                                variant="text"
                                autoCapitalize={false}
                            >
                                <Typography
                                    variant="h6"
                                    className={classes.navText}
                                >
                                    Login
                                </Typography>
                            </Button>

                            <CustomButton disableRipple>
                                <Typography variant="h6">Signup</Typography>
                            </CustomButton>
                        </Toolbar>
                    </AppBar>
                    <Toolbar />

                    <Container style={{ height: "100%" }} maxWidth="md">
                        <Grid
                            style={{ height: "100%" }}
                            container
                            direction="column"
                            justify="center"
                        >
                            <Grid item>
                                <Typography
                                    variant="h2"
                                    style={{
                                        color: "#fff",
                                        fontWeight: "bolder"
                                    }}
                                >
                                    Learn to Code
                                </Typography>
                            </Grid>

                            <Grid item style={{ marginTop: 16 }}>
                                <Typography
                                    variant="h5"
                                    style={{
                                        color: "#fff",
                                        fontWeight: "bolder"
                                    }}
                                >
                                    Our extensive demo includes course website
                                    front, student account, front, student
                                    account,
                                </Typography>
                            </Grid>

                            <Grid item style={{ marginTop: 32 }}>
                                <FullButton disableRipple>
                                    <Typography variant="h6">
                                        BROWSE COURSES
                                    </Typography>
                                </FullButton>
                            </Grid>
                        </Grid>
                    </Container>
                </Container>
            </div>
            <Paper elevation={0} variant="outlined" style={{ padding: 16 }}>
                <Container>
                    <Grid container wrap="wrap" spacing={4}>
                        {renderMarketing()}
                        {renderMarketing()}
                        {renderMarketing()}
                    </Grid>
                </Container>
            </Paper>
        </>
    );
}
