import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import './createdarticles.css'
import { axiosInstance } from '../../config';



export default function CreatedArticles({articles}) {
  const handleDelete = async(id) => {
      axiosInstance.delete(`api/article/done/${id}`)
    }
  
  const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 150,
    editable: true,
    renderCell:(params) => {
    return(
        <div className='avatar-container'>
            <img src={params.row.image} alt=''/>
        </div>
    )
   }
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 200,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 300,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Date Published',
    width: 180,
    editable: true,
  },
  {
    field: 'delete',
    headerName: 'Delete member',
    sortable: false,
    width: 200,
    renderCell:(params) => {
    return(
        <button onClick = {()=> handleDelete(params.row._id)} className='flex items-center justify-center'><i className="fa-solid fa-trash ml-10 text-red-400"></i></button>
    )
   }
  },
];
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        id={articles._id}
        rows={articles}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[7]}
        checkboxSelection
        getRowId={(row) =>row._id}
        //disableSelectionOnClick
        //experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}