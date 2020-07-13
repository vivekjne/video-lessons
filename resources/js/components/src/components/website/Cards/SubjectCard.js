import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { grey } from "@material-ui/core/colors";

import IconButton from "@material-ui/core/IconButton";
import FavoriteOutlined from "@material-ui/icons/FavoriteBorderOutlined";
import TimelapseOutlined from "@material-ui/icons/TimelapseOutlined";
import OndemandVideoOutlined from "@material-ui/icons/OndemandVideoOutlined";
import { Link } from "react-router-dom";

import CustomPaper from "../../../components/website/Cards/Custom";

export default function SubjectCard({ item }) {
    return (
        <CustomPaper height={250}>
            <Grid
                style={{ height: "100%" }}
                container
                direction="column"
                justify="space-between"
            >
                <Grid item>
                    <Grid container justify="space-between">
                        <Grid item>
                            <div style={{ display: "flex" }}>
                                <Avatar src={`/uploads/${item.thumbnail}`} />

                                <Typography
                                    style={{
                                        marginLeft: 8
                                    }}
                                >
                                    {item.display_name}
                                    <Typography
                                        color="textSecondary"
                                        variant="caption"
                                        component="span"
                                        style={{
                                            display: "block"
                                        }}
                                    >
                                        {item.classroom.name}.
                                        {item.curricullum.name}
                                    </Typography>
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item>
                            <IconButton color="default">
                                <FavoriteOutlined />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="body1" style={{ color: grey[700] }}>
                        {item.short_description || "No description provided"}
                    </Typography>
                </Grid>

                <Grid item>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        spacing={3}
                    >
                        <Grid item>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <TimelapseOutlined
                                    style={{
                                        fontSize: 20,
                                        color: grey[500],
                                        marginRight: 4
                                    }}
                                />

                                <Typography
                                    style={{
                                        color: grey[500]
                                    }}
                                    variant="body2"
                                    component="span"
                                >
                                    4 lessons left
                                </Typography>
                            </div>
                        </Grid>

                        <Grid item>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center"
                                }}
                            >
                                <OndemandVideoOutlined
                                    style={{
                                        fontSize: 20,
                                        color: grey[500],
                                        marginRight: 4
                                    }}
                                />

                                <Typography
                                    style={{
                                        color: grey[500]
                                    }}
                                    variant="body2"
                                    component="span"
                                >
                                    12 lessons
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container alignItems="center" justify="center">
                        <Button
                            component={Link}
                            to={`/subject/${item.slug}/${item.id}`}
                            variant="outlined"
                        >
                            <Typography>BEGIN</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </CustomPaper>
    );
}
