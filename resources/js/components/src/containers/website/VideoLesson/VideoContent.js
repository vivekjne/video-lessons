import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
const Accordion = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0
        },
        "&:before": {
            display: "none"
        },
        "&$expanded": {
            margin: "auto"
        }
    },
    expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: "rgba(0, 0, 0, .03)",
        borderBottom: "1px solid rgba(0, 0, 0, .125)",
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: 56
        }
    },
    content: {
        "&$expanded": {
            margin: "12px 0"
        }
    },
    expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiAccordionDetails);

export default function VideoContent({ data, onLessonClick }) {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {data &&
                data.sections.map(section => (
                    <Accordion key={section.id} square>
                        <AccordionSummary
                            aria-controls="panel3d-content"
                            id="panel3d-header"
                        >
                            <Typography>{section.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {section.lessons.map((lesson, index) => (
                                    <>
                                        <ListItem key={lesson}>
                                            <ListItemIcon>
                                                <IconButton
                                                    onClick={() =>
                                                        onLessonClick(lesson)
                                                    }
                                                    component={Link}
                                                    to={`/subject/${data.slug}/${data.id}/lesson/${lesson.id}`}
                                                >
                                                    <PlayCircleFilled />
                                                </IconButton>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={lesson.name}
                                                secondary={lesson.duration}
                                            />
                                        </ListItem>
                                        {index !==
                                            section.lessons.length - 1 && (
                                            <Divider />
                                        )}
                                    </>
                                ))}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))}
        </div>
    );
}
