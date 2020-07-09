import React, { useState } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import CurricullumList from "./List";
import CurricullumAdd from "./Add";
import CurricullumEdit from "./Edit";

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
