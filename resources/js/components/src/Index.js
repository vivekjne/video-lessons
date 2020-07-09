import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: teal
    }
});

export const store = configureStore({});
function Index() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    );
}

export default Index;

console.log("store=", store);
ReactDOM.render(<Index />, document.getElementById("app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
