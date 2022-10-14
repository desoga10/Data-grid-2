import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbarExport } from '@mui/x-data-grid';


const GridTable = () => {

  const [tableData, setTableData] = useState([])
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'username', headerName: 'username', width: 300 },
    { field: 'email', headerName: 'email', width: 300 },
    {
      field: 'street', headerName: 'street', width: 300,
      valueGetter: (tableData) => tableData?.row?.address?.street
    },
    {
      field: 'company', headerName: 'company', width: 300,
      valueGetter: (tableData) => tableData?.row?.company?.name
    }
  ]

  return (
    <>
      <Box>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={tableData}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            components={{ Toolbar: GridToolbarExport }}
          />
        </div>
      </Box>


    </>
  )
}
export default GridTable