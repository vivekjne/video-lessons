import React, { useState, lazy } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

const ClassroomList = lazy(() => import("./List"));
const ClassroomAdd = lazy(() => import("./Add"));
const ClassroomEdit = lazy(() => import("./Edit"));

const Curricullum = () => {
    const { path, url } = useRouteMatch();
    console.log({ path });
    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <ClassroomList />
                    {/* <CurricullumAdd /> */}
                </Route>

                <Route exact path={`${path}/add`}>
                    <ClassroomAdd />
                </Route>

                <Route path={`${path}/:id/edit`}>
                    <ClassroomEdit />
                </Route>
            </Switch>
        </>
    );
};

export default Curricullum;
