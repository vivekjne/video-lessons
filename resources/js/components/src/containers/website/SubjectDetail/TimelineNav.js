import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import ArrowDownward from "@material-ui/icons/KeyboardArrowDown";
import Divider from "@material-ui/core/Divider";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlayCircleFilledOutlined from "@material-ui/icons/PlayCircleFilledOutlined";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { purple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: "6px 16px"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main
    },
    root: {
        width: "100%",

        backgroundColor: theme.palette.background.paper
    }
}));

export default function TimelineNav({ item }) {
    const classes = useStyles();

    return (
        <div
            style={{
                position: "relative",
                borderLeft: "1px solid #ccc",
                // height: 1000,
                width: "100%",
                marginLeft: 16
            }}
        >
            <div
                style={{
                    display: "flex",
                    // alignItems: "center",
                    width: "100%",

                    paddingTop: 8,
                    position: "relative"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: -6,
                        width: 12,
                        height: 12,
                        borderRadius: 6,
                        border: "1px solid #ccc",
                        background: purple[700],
                        zIndex: 1,
                        display: "flex",
                        // alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer"
                    }}
                >
                    <Typography variant="h4"></Typography>
                </div>
                <div
                    style={{
                        marginLeft: 16,
                        marginTop: -4,
                        marginRight: 16,
                        width: "100%"
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        style={{ marginBottom: 16, color: purple[900] }}
                    >
                        {item.name}
                    </Typography>
                </div>
            </div>
        </div>
    );
}
