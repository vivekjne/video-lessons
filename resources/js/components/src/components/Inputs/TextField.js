import React from "react";
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme
} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { teal } from "@material-ui/core/colors";

const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "teal"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "teal"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "red"
            },
            "&:hover fieldset": {
                borderColor: "yellow"
            },
            "&.Mui-focused fieldset": {
                borderColor: "teal"
            }
        }
    }
})(TextField);

export default CssTextField;
