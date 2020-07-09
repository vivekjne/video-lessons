import React, { useState } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import ClassroomList from "./List";
import ClassroomAdd from "./Add";
import ClassroomEdit from "./Edit";

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
