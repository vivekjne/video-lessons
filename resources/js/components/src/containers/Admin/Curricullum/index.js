import React, { useState, lazy } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

const CurricullumList = lazy(() => import("./List"));
const CurricullumAdd = lazy(() => import("./Add"));
const CurricullumEdit = lazy(() => import("./Edit"));

const Curricullum = () => {
    const { path, url } = useRouteMatch();
    console.log({ path });
    return (
        <>
            <Switch>
                <Route exact path={path}>
                    <CurricullumList />
                    {/* <CurricullumAdd /> */}
                </Route>

                <Route exact path={`${path}/add`}>
                    <CurricullumAdd />
                </Route>

                <Route path={`${path}/:id/edit`}>
                    <CurricullumEdit />
                </Route>
            </Switch>
        </>
    );
};

export default Curricullum;
