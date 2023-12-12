import React from "react";
import "./userstopic.css";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { axiosInstance } from "../../config";

const UsersTopic = ({ topics }) => {
  const handleDelete = async (id) => {
    await axiosInstance.delete(`api/topic/delete/${id}`);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "speaker",
      headerName: "Speakers",
      width: 200,
      editable: true,
    },
    {
      field: "topic",
      headerName: "Topics",
      width: 750,
      editable: true,
    },

    {
      field: "delete",
      headerName: "Delete member",
      sortable: false,
      width: 100,
      renderCell: (params) => {
        return (
          <button
            onClick={() => handleDelete(params.row._id)}
            className="flex items-center justify-center"
          >
            <i className="fa-solid fa-trash ml-10 text-red-400"></i>
          </button>
        );
      },
    },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        id={topics._id}
        rows={topics}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row._id}
        //disableSelectionOnClick
        //experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default UsersTopic;
