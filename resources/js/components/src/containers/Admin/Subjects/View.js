import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Heading from "../../../components/layout/Heading";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

import { teal, grey } from "@material-ui/core/colors";

import AddButton from "@material-ui/icons/Add";
import SectionModal from "./Modals/Section";
import LesonModal from "./Modals/Lesson";
import { useParams } from "react-router-dom";
// import Icon from "@material-ui/core/Button";

import BasicForm from "./Forms/Basic";
import MediaForm from "./Forms/Media";
import SeoForm from "./Forms/Seo";
import subjectClient from "../../../api/subjectClient";
import { CircularProgress } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(4),
        paddingBottom: theme.spacing(2)
    },
    lessonContainer: {
        marginTop: theme.spacing(4)
    }
}));

export default function CenteredTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [isOpenSection, setOpenSection] = React.useState(false);
    const [isOpenLesson, setOpenLesson] = React.useState(false);
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const { id } = useParams();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        async function getInitialData() {
            try {
                const response = await subjectClient.getSubject(id);
                setData(response.data.data);
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        }

        getInitialData();
    }, []);

    function TabPanel(props) {
        const classes = useStyles();

        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography component={"span"}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return !loading ? (
        <>
            <Heading title={data.name} disableAction />
            <Paper className={classes.root}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Lessons" />

                    <Tab label="Basic" />
                    <Tab label="Media" />
                    <Tab label="Seo" />
                </Tabs>

                <Container maxWidth="md">
                    <TabPanel value={value} index={0}>
                        <Container
                            maxWidth="md"
                            className={classes.lessonContainer}
                        >
                            <Grid
                                container
                                alignItems="center"
                                justify="center"
                                spacing={2}
                            >
                                <Grid item>
                                    <Button
                                        onClick={() => setOpenSection(true)}
                                        style={{ borderRadius: 30 }}
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<AddButton />}
                                    >
                                        Add Section
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button
                                        onClick={() => setOpenLesson(true)}
                                        style={{ borderRadius: 30 }}
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<AddButton />}
                                    >
                                        Add Lesson
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button
                                        style={{ borderRadius: 30 }}
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        startIcon={<AddButton />}
                                    >
                                        Sort Sections
                                    </Button>
                                </Grid>
                            </Grid>

                            <div className={classes.lessonContainer}>
                                {[1, 2, 3, 4, 5].map(section => (
                                    <Container
                                        key={section}
                                        maxWidth="md"
                                        style={{ marginBottom: 48 }}
                                    >
                                        <Paper
                                            elevation={0}
                                            // variant="outlined"
                                            style={{
                                                background: teal[50],
                                                marginBottom: 20,
                                                marginLeft: 16,
                                                marginRight: 16,
                                                padding: 16
                                            }}
                                        >
                                            <Grid container direction="column">
                                                <Grid item>
                                                    <Typography
                                                        variant="h6"
                                                        color="textSecondary"
                                                    >
                                                        Section {section}:
                                                        Trigonometry
                                                    </Typography>
                                                </Grid>

                                                <Grid item>
                                                    <List
                                                        style={{
                                                            margin: "0 16px"
                                                        }}
                                                    >
                                                        {[1, 2, 3].map(
                                                            lesson => (
                                                                <ListItem
                                                                    key={lesson}
                                                                    style={{
                                                                        background:
                                                                            "#fff",
                                                                        marginBottom: 16
                                                                    }}
                                                                >
                                                                    <ListItemText
                                                                        primary={`Lesson ${lesson}`}
                                                                        // secondary={secondary ? 'Secondary text' : null}
                                                                    />
                                                                </ListItem>
                                                            )
                                                        )}
                                                    </List>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Container>
                                ))}
                            </div>
                        </Container>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <BasicForm />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <MediaForm />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <SeoForm />
                    </TabPanel>
                </Container>
            </Paper>

            <SectionModal
                open={isOpenSection}
                handleClose={() => setOpenSection(false)}
            />

            <LesonModal
                open={isOpenLesson}
                handleClose={() => setOpenLesson(false)}
            />
        </>
    ) : (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <CircularProgress color="primary" />
        </div>
    );
}
