import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";

import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import WorkIcon from "@material-ui/icons/Work";

import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";

import MenuBookIcon from "@material-ui/icons/MenuBook";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { mainListItems, secondaryListItems } from "./listItems";
import Header from "./Header";
import { useParams, useRouteMatch, Link, useLocation } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },

    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-even",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },

    title: {
        flexGrow: 1
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    fixedHeight: {
        height: 240
    },

    list: {
        color: "#2c3e50"
    },
    listActive: {
        background: theme.palette.grey[300],
        color: "#2c3e50"

        // color: theme.palette.common.white,
        // fontWeight: "bold"
    },
    listIcon: {
        // color: theme.palette.common.white
        color: "#2c3e50",
        fontSize: 24
    }
}));

export default function Sidebar({ children, handleDrawerClose, open }) {
    let { path, url } = useRouteMatch();
    const location = useLocation();
    const classes = useStyles();
    console.log(location);
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(
                    classes.drawerPaper,
                    !open && classes.drawerPaperClose
                )
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <MenuIcon />
                </IconButton>
                <Typography>Ecommerce Admin</Typography>
            </div>
            <Divider />
            <List>
                <ListItem
                    button
                    className={
                        location.pathname === `${url}/dashboard`
                            ? classes.listActive
                            : classes.list
                    }
                    component={Link}
                    to={`${url}/dashboard`}
                >
                    <ListItemIcon className={classes.listIcon}>
                        <DashboardIcon fontSize="inherit" color="inherit" />
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                </ListItem>

                <ListItem
                    className={
                        location.pathname === `${url}/curricullums`
                            ? classes.listActive
                            : classes.list
                    }
                    button
                    component={Link}
                    to={`${url}/curricullums`}
                >
                    <ListItemIcon className={classes.listIcon}>
                        <MenuBookIcon fontSize="inherit" />
                    </ListItemIcon>
                    <ListItemText primary="Curricullums" />
                </ListItem>

                <ListItem
                    className={
                        location.pathname === `${url}/classrooms`
                            ? classes.listActive
                            : classes.list
                    }
                    button
                    component={Link}
                    to={`${url}/classrooms`}
                >
                    <ListItemIcon className={classes.listIcon}>
                        <WorkIcon fontSize="inherit" />
                    </ListItemIcon>
                    <ListItemText primary="Classrooms" />
                </ListItem>

                <ListItem
                    className={
                        location.pathname.includes("subjects")
                            ? classes.listActive
                            : classes.list
                    }
                    button
                    component={Link}
                    to={`${url}/subjects`}
                >
                    <ListItemIcon className={classes.listIcon}>
                        <CollectionsBookmarkIcon fontSize="inherit" />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItem>
                <ListItem
                    className={
                        location.pathname === `${url}/customers`
                            ? classes.listActive
                            : classes.list
                    }
                    button
                    component={Link}
                    to={`${url}/customers`}
                >
                    <ListItemIcon className={classes.listIcon}>
                        <PeopleIcon fontSize="inherit" />
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                </ListItem>
            </List>
            {/* <Divider /> */}
            {/* <List>{secondaryListItems}</List> */}
        </Drawer>
    );
}
