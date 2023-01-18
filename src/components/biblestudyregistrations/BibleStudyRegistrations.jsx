import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { axiosInstance } from '../../config';




export default function BibleStudyRegistrations({bibleReg}) {

  const handleDelete = (id) => {
     axiosInstance.delete(`api/bible/done/${id}`)
  }

  const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Person name',
    width: 400,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Person phone',
    width: 400,
    editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete member',
    sortable: false,
    width: 400,
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
        id={bibleReg?._id}
        rows={bibleReg}
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