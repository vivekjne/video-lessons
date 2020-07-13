import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Heading from "../../../components/layout/Heading";
import MaterialTable from "material-table";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import { teal } from "@material-ui/core/colors";
import subjectClient from "../../../api/subjectClient";

const SubjectList = () => {
    const history = useHistory();
    const { path } = useRouteMatch();

    const [data, setData] = useState([]);

    const handleChange = (e, rowData) => {
        console.log(rowData);
        const newData = [...data];
        const itemIndex = newData.findIndex(d => d.id === rowData.id);
        newData[itemIndex].isActive = e.target.checked;
        setData(newData);
    };

    React.useEffect(() => {
        async function fetchInitialData() {
            try {
                const response = await subjectClient.getSubjects();
                setData(response.data.data);
            } catch (err) {}
        }

        fetchInitialData();
    }, []);
    return (
        <>
            <Heading
                title="Subjects"
                actionLabel="Add Subject"
                action={"/admin/subjects/add"}
            />

            <div style={{ marginTop: 24 }}>
                <MaterialTable
                    columns={[
                        { title: "ID", field: "id" },

                        {
                            title: "Title",
                            field: "name",
                            render: rowData => (
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to={`/admin/subjects/${rowData.id}`}
                                >
                                    <Typography>{rowData.name}</Typography>
                                </Link>
                            )
                        },
                        { title: "Slug", field: "slug" },
                        {
                            title: "Thumbnail",
                            field: "thumbnail",
                            render: rowData => (
                                <img
                                    src={`http://localhost:8000/uploads/${rowData.thumbnail}`}
                                    style={{ width: 50, height: 50 }}
                                />
                            )
                        },

                        {
                            title: "Active",
                            field: "isActive",
                            render: rowData => (
                                <Switch
                                    onChange={e => handleChange(e, rowData)}
                                    checked={rowData.isActive === 1}
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
                        // {
                        //     icon: "edit",
                        //     tooltip: "Edit Curricullum",
                        //     iconProps: {
                        //         color: "primary"
                        //     },
                        //     onClick: (event, rowData) =>
                        //         history.push({
                        //             pathname: `${path}/${rowData.id}/edit`,
                        //             state: {
                        //                 rowData
                        //             }
                        //         })
                        // },
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

export default SubjectList;
