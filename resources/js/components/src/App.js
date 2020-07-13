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
// import Home from "./containers/website/Home";
// import StudentHome from "./containers/website/StudentHome";
// import Admin from "./containers/Admin";

const Admin = lazy(() => import("./containers/Admin"));
const StudentHome = lazy(() => import("./containers/website/StudentHome"));

class App extends React.Component {
    render() {
        const isLoggedIn = localStorage.getItem("token");

        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/admin">
                            <Suspense fallback={<div>loading...</div>}>
                                <Admin />
                            </Suspense>
                        </Route>

                        <Route path="/">
                            <Suspense fallback={<div>loading...</div>}>
                                {/* {isLoggedIn ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Redirect to="/login" />
                                )} */}
                                {/* <Redirect to="/admin" /> */}
                                {/* <Home /> */}
                                <StudentHome />
                            </Suspense>
                        </Route>

                        <Route component={<div>404</div>} />
                    </Switch>
                </>
            </Router>
        );
    }
}
export default App;
