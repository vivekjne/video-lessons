import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const CustomButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(teal[500]),
        backgroundColor: teal[500],
        "&:hover": {
            backgroundColor: teal[700]
        }
    }
}))(Button);

export default CustomButton;
