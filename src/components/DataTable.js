import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, Typography } from '@mui/material';
import { systemTheme } from '../theme';
import Badge from './Badge'
import Toggle from './Toggle';

const columns = [
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'role',
    headerName: 'Role',
    description: 'This column is not sortable',
    sortable: false,
    width: 160,
    renderCell: (row) => <Badge label={row.value} rounded size='small' variant='outlined' />
  },
  {
    field: 'email',
    headerName: 'Email Address',
    description: 'This column is not sortable',
    sortable: false,
    width: 200,
    renderCell: (row) => <span style={{ color: '#555', fontSize: '12px' }}>{row.value}</span>
  },
  {
    field: 'active',
    headerName: 'Active',
    description: 'This column is not sortable',
    sortable: false,
    width: 90,
    renderCell: (row) => <Toggle />
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14, role: 'Product Designer', email: 'jonsnow@gmail.com', active: true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31, role: 'Product Manager', email: 'cersei.l@gmail.com', active: false },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, role: 'Product Manager', email: 'jaime_lann@gmail.com', active: true },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11, role: 'Product Designer', email: 'aryastark1@gmail.com', active: true },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, role: 'Software Engineer', email: 'dae.tar@gmail.com', active: true },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, role: 'Product Designer', email: 'mel@gmail.com', active: false },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, role: 'Software Engineer', email: 'ferrcliff@gmail.com', active: true },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, role: 'Product Designer', email: 'rossini@gmail.com', active: false },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, role: 'Product Manager', email: 'harveyroxie@gmail.com', active: true },
];

function DataTableHeader() {
    return (
        <Box width='100%' sx={{ padding: '16px 18px', borderBottom: '1px solid #e0e0e0' }}>
            <Typography sx={{ fontWeight: 500, fontSize: '16px' }}>Team Members</Typography>
            <Typography sx={{ fontSize: '14px', color: '#555' }}>All current project team members since April 2024.</Typography>
        </Box>
    )
}

function DataTable() {
  return (
    <ThemeProvider theme={systemTheme}>
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            slots={{ 
                toolbar: DataTableHeader
            }}
            columns={columns}
            initialState={{
            pagination: {
                paginationModel: {
                pageSize: 5,
                },
            },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            sx={{ 
                '.MuiDataGrid-columnHeader': {
                    backgroundColor: '#f5f5f5',
                },
                '.MuiDataGrid-filler': {
                    backgroundColor: '#f5f5f5'
                },
                '.MuiDataGrid-scrollbarFiller': {
                  backgroundColor: '#f5f5f5'
                },
                '.MuiDataGrid-columnHeaderTitle': {
                    fontSize: '12px',
                    color: '#555'
                }
            }}
            columnHeaderHeight={40}
        />
        </Box>
    </ThemeProvider>
  );
}

export default DataTable;