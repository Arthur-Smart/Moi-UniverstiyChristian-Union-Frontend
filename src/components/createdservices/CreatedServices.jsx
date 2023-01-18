import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { axiosInstance } from '../../config';


export default function CreatedServices({service}) {

    const handleDelete = async(id) => {
      await axiosInstance.delete(`api/service/done/${id}`)
  }

const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'topic',
    headerName: 'Topic',
    width: 200,
    editable: true,
  },
  {
    field: 'speaker',
    headerName: 'Speaker',
    width: 200,
    editable: true,
  },
  {
    field: 'venue',
    headerName: 'Venue',
    width: 200,
    editable: true,
  },
  {
    field: 'day',
    headerName: 'Day',
    width: 100,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
    editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete',
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
        id={service._id}
        rows={service}
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