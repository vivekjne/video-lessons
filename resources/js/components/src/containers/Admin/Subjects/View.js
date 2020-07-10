import React from "react";
import CustomSnackbar from "../../../components/layout/CustomSnackbar";

export default function SubjectView() {
    React.useEffect(() => {
        setOpen(true);
    }, []);
    const [open, setOpen] = React.useState(false);
    return (
        <CustomSnackbar
            open={open}
            message={"Subject added successfully"}
            handleClose={() => setOpen(false)}
        />
    );
}
