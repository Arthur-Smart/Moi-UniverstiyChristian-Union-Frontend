import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { axiosInstance } from '../../config';




export default function RegisteredMembers({member}) {

  const handleDelete = async(id) => {
      await axiosInstance.delete(`api/register/member/${id}`)
  }

  const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Member name',
    width: 250,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Member email',
    width: 250,
    editable: true,
  },
   {
    field: 'phone',
    headerName: 'Member phone',
    width: 150,
    editable: true,
  },
  {
    field: 'year',
    headerName: 'Year of study',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete member',
    sortable: false,
    width: 200,
    renderCell:(params) => {
    return(
        <button onClick={()=>handleDelete(params.row._id)} className='flex items-center justify-center'><i className="fa-solid fa-trash ml-10 text-red-400"></i></button>
    )
   }
  },
];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        id={member._id}
        rows={member}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) =>row._id}
        //disableSelectionOnClick
        //experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}