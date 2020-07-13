import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { teal } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    formControl: {
        // margin: theme.spacing(1),
        width: "100%"
        // minWidth: 120
        // maxWidth: 300
    },
    chips: {
        display: "flex",
        flexWrap: "wrap"
    },
    chip: {
        margin: 2,
        background: teal[100],
        color: teal[900]
    },
    noLabel: {
        marginTop: theme.spacing(3)
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
            // width: 250
        }
    }
};

function getStyles(data, selected, theme) {
    return {
        fontWeight:
            selected.findIndex(s => s.id === data.id) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        backgroundColor:
            selected.findIndex(s => s.id === data.id) === -1
                ? "white"
                : teal[100]
    };
}

export default function MultipleSelect({
    label,
    data,
    selected,
    handleChange,
    handleChangeMultiple,
    error
}) {
    const classes = useStyles();
    const theme = useTheme();
    console.log({ selected });
    return (
        <div>
            <FormControl error={error} className={classes.formControl}>
                <InputLabel id="demo-mutiple-chip-label">{label}</InputLabel>
                <Select
                    fullWidth
                    labelId="demo-mutiple-chip-label"
                    id="demo-mutiple-chip"
                    multiple
                    value={selected}
                    onChange={handleChange}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => (
                                <Chip
                                    key={value.id}
                                    // onDelete={e => e.stopPropagation()}
                                    label={value.name}
                                    className={classes.chip}
                                />
                            ))}
                        </div>
                    )}
                    MenuProps={MenuProps}
                >
                    {data.map(d => (
                        <MenuItem
                            key={d.id}
                            value={d}
                            style={getStyles(d, selected, theme)}
                        >
                            {d.name}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>{error}</FormHelperText>
            </FormControl>
        </div>
    );
}
