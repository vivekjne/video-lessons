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
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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

export default function CustomizedTimeline({ number, item, data }) {
    const classes = useStyles();

    return (
        <div
            style={{
                position: "relative",
                borderLeft: "1px solid #ccc",
                // height: 1000,
                width: "100%",
                marginLeft: 16,
                paddingRight: 16
            }}
        >
            <div
                style={{
                    display: "flex",
                    // alignItems: "center",
                    width: "100%",
                    padding: "32px 0",
                    position: "relative"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: -25,
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        border: "1px solid #ccc",
                        background: "#fafafa",
                        zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="h4">{number}</Typography>
                </div>
                <div style={{ marginLeft: 40, marginRight: 16, width: "100%" }}>
                    <Typography variant="h5" style={{ marginBottom: 16 }}>
                        {item.name}
                    </Typography>

                    <Typography
                        style={{ marginBottom: 16 }}
                        variant="body1"
                        color="textSecondary"
                    >
                        {item.summary}
                    </Typography>

                    <Accordion elevation={4}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                {item.lessons.length}{" "}
                                {item.lessons.length === 1
                                    ? "lesson"
                                    : "lessons"}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{ padding: 0 }}>
                            <List className={classes.root}>
                                {item.lessons && item.lessons.length === 0 && (
                                    <Typography
                                        style={{ paddingLeft: 16 }}
                                        variant="body1"
                                        color="textSecondary"
                                    >
                                        No Lessons yet!
                                    </Typography>
                                )}
                                {item.lessons &&
                                    item.lessons.map((lesson, index) => (
                                        <>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <Button
                                                        component={Link}
                                                        to={`/subject/${data.slug}/${data.id}/lesson/${lesson.id}`}
                                                    >
                                                        <PlayCircleFilledOutlined />
                                                    </Button>
                                                </ListItemIcon>
                                                <ListItemText
                                                    // id="switch-list-label-wifi"
                                                    primary={lesson.name}
                                                />
                                                <ListItemSecondaryAction>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                    >
                                                        {lesson.duration}
                                                    </Typography>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                            {index !==
                                                item.lessons.length - 1 && (
                                                <Divider />
                                            )}
                                        </>
                                    ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
