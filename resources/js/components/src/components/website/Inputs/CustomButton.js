import React from "react";
import {
    createMuiTheme,
    withStyles,
    makeStyles,
    ThemeProvider
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { indigo, blue } from "@material-ui/core/colors";

const CustomButton = withStyles(theme => ({
    root: {
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        lineHeight: 1.5,
        backgroundColor: "transparent",
        borderColor: "#fff",
        color: "#fff",
        minWidth: theme.spacing(14),
        boxShadow: "none",

        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:hover": {
            backgroundColor: "#fff",
            borderColor: "transparent",
            boxShadow: "none",
            color: blue[700]
        },
        "&:active": {
            boxShadow: "none",
            backgroundColor: "#fff",
            borderColor: "transparent",
            color: blue[900]
            // borderColor: "indigo"
        },
        "&:focus": {
            boxShadow: "none"
            // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
        }
    }
}))(Button);

export const FullButton = withStyles(theme => ({
    root: {
        boxShadow: "none",
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        lineHeight: 1.5,
        backgroundColor: theme.palette.common.white,
        borderColor: "transparent",
        color: theme.palette.grey[700],
        minWidth: theme.spacing(14),
        boxShadow: "none",

        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(","),
        "&:hover": {
            backgroundColor: theme.palette.grey[200],
            borderColor: "transparent",
            color: theme.palette.grey[700]
            // backgroundColor: "#fff",
            // borderColor: "transparent",
            // boxShadow: "none",
            // color: blue[700]
        }
        // "&:active": {
        //     boxShadow: "none",
        //     backgroundColor: "#fff",
        //     borderColor: "transparent",
        //     color: blue[900]
        //     // borderColor: "indigo"
        // },
        // "&:focus": {
        //     boxShadow: "none"
        //     // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
        // }
    }
}))(Button);

export default CustomButton;
