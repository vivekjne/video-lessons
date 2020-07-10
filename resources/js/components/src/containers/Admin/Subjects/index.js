import React, { useState, lazy } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SubjectView from "./View";
// import SubjectAdd from "./Add";
// import SubjectEdit from "./Edit";
const SubjectList = lazy(() => import("./List"));
const SubjectAdd = lazy(() => import("./Add"));

const Subject = () => {
    const { path, url } = useRouteMatch();
    console.log({ path });

    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <SubjectList />
                    {/* <CurricullumAdd /> */}
                </Route>

                <Route exact path={`${path}/add`}>
                    <SubjectAdd />
                </Route>

                <Route path={`${path}/:id/edit`}>
                    {/* <ClassroomEdit /> */}
                    <div>Edit</div>
                </Route>

                <Route path={`${path}/:id`}>
                    {/* <ClassroomAdd /> */}
                    <SubjectView />
                </Route>
            </Switch>
        </>
    );
};

export default Subject;
