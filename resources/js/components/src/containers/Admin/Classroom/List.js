import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Heading from "../../../components/layout/Heading";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import { useHistory, useRouteMatch } from "react-router-dom";
import { teal } from "@material-ui/core/colors";

const ClassroomList = () => {
    const history = useHistory();
    const { path } = useRouteMatch();

    const [data, setData] = useState([
        {
            id: 1,
            name: "CBSE",
            slug: "cbse-syllabus",
            isActive: false,
            created_at: "9-07-2020",
            updated_at: "9-07-2020"
        },
        {
            id: 2,
            name: "ICSE",
            slug: "icse-syllabus",
            isActive: true,
            created_at: "9-07-2020",
            updated_at: "9-07-2020"
        }
    ]);

    const handleChange = (e, rowData) => {
        console.log(rowData);
        const newData = [...data];
        const itemIndex = newData.findIndex(d => d.id === rowData.id);
        newData[itemIndex].isActive = e.target.checked;
        setData(newData);
    };
    return (
        <>
            <Heading
                title="Classrooms"
                actionLabel="Add Classroom"
                action={"/admin/classrooms/add"}
            />

            <div style={{ marginTop: 24 }}>
                <MaterialTable
                    columns={[
                        { title: "ID", field: "id" },

                        { title: "Title", field: "name" },
                        { title: "Slug", field: "slug" },

                        {
                            title: "Active",
                            field: "isActive",
                            render: rowData => (
                                <Switch
                                    onChange={e => handleChange(e, rowData)}
                                    checked={rowData.isActive}
                                    color="secondary"
                                />
                            )
                        },
                        { title: "Created At", field: "created_at" },
                        { title: "Updated At", field: "updated_at" }
                    ]}
                    data={data}
                    title="Classroom List"
                    options={{
                        headerStyle: {
                            backgroundColor: teal[500],
                            color: "#FFF"
                        },
                        paging: data.length > 5 ? true : false,
                        search: data.length > 5 ? true : false,
                        showTitle: false,
                        toolbar: false,
                        actionsColumnIndex: -1
                    }}
                    actions={[
                        {
                            icon: "edit",
                            tooltip: "Edit Curricullum",
                            iconProps: {
                                color: "primary"
                            },
                            onClick: (event, rowData) =>
                                history.push({
                                    pathname: `${path}/${rowData.id}/edit`,
                                    state: {
                                        rowData
                                    }
                                })
                        },
                        rowData => ({
                            icon: "delete",
                            tooltip: "Delete Curricullum",
                            iconProps: {
                                color: "secondary"
                            },
                            onClick: (event, rowData) =>
                                confirm("You want to delete " + rowData.name)
                        })
                    ]}
                />
            </div>
        </>
    );
};

export default ClassroomList;
