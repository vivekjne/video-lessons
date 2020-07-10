import React, { lazy, Suspense } from "react";

import {
    Route,
    Switch,
    Link,
    Redirect,
    BrowserRouter as Router
} from "react-router-dom"; // react-router v4/v5
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import PrivateRoute from "./helpers/privateRoute";
import Example from "./containers/Example";
// import Admin from "./containers/Admin";

const Admin = lazy(() => import("./containers/Admin"));

class App extends React.Component {
    render() {
        const isLoggedIn = localStorage.getItem("token");

        return (
            <Router>
                <>
                    <Suspense fallback={<div>loading...</div>}>
                        <Switch>
                            <Route exact path="/">
                                {/* {isLoggedIn ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Redirect to="/login" />
                                )} */}
                                <Redirect to="/admin" />
                            </Route>
                            <Route path="/admin">
                                <Admin />
                            </Route>
                            <Route component={<div>404</div>} />
                        </Switch>
                    </Suspense>
                </>
            </Router>
        );
    }
}
export default App;
