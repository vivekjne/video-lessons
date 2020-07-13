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
import Axios from "axios";
import moment from "moment";
import curricullumClient from "../../../api/curricullumClient";

const CurricullumList = () => {
    const [data, setData] = useState([]);
    async function fetchCurricullums() {
        try {
            const response = await curricullumClient.getCurricullums();
            console.log({ response: response.data });
            setData(response.data.data);
        } catch (err) {
            console.log(err.response);
        }
    }
    React.useEffect(() => {
        fetchCurricullums();
    }, []);
    const history = useHistory();
    const { path } = useRouteMatch();

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
                title="Curricullums"
                actionLabel="Add Curricullum"
                action={"/admin/curricullums/add"}
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
                        {
                            title: "Created At",
                            field: "created_at",
                            render: rowData => (
                                <Typography variant="inherit">
                                    {moment(rowData.created_at).format(
                                        "DD-MM-YYYY"
                                    )}
                                </Typography>
                            )
                        },
                        {
                            title: "Updated At",
                            field: "updated_at",
                            render: rowData => (
                                <Typography variant="inherit">
                                    {moment(rowData.updated_at).format(
                                        "DD-MM-YYYY"
                                    )}
                                </Typography>
                            )
                        }
                    ]}
                    data={data}
                    title="Curricullum List"
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

export default CurricullumList;
