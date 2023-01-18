import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { axiosInstance } from '../../config';




export default function AppointmentsMade({appointment}) {

  const handleDelete = (id) => {
    axiosInstance.delete(`api/appointment/done/${id}`)
  }

  const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Person name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Person Email',
    width: 250,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Person phone',
    width: 150,
    editable: true,
  },
  {
    field: 'subject',
    headerName: 'Appointment subject',
    width: 300,
    editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete member',
    sortable: false,
    width: 200,
    renderCell:(params) => {
    return(
        <button onClick={() =>handleDelete(params.row._id)} className='flex items-center justify-center'><i className="fa-solid fa-trash ml-10 text-red-400"></i></button>
    )
   }
  },
];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        id={appointment?._id}
        rows={appointment}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) =>row?._id}
        //disableSelectionOnClick
        //experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}