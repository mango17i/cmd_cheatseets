import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { useMemo, useState, useEffect } from "react";

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './CmdGrid.css';

// function CmdGrid() {}
// return <div>
// {/* <UserList /> */}



function GridExample() {
  // never changes, so we can use useMemo
  const columnDefs = useMemo(() => [
    { field: 'name',
     },
    { field: 'username' },
    { field: 'email' },
    { field: 'phone' },
    { field: 'address.street',
      headerName: 'Street',
    },
    {field: 'company.name',
      headerName: 'Company',
    }
  ], []);

  // never changes, so we can use useMemo
  const defaultColDef = useMemo(() => ({
    resizable: true,
    sortable: true
  }), []);

  // changes, needs to be state
  const [rowData, setRowData] = useState();

  // useEffect(function () {
  //   (async function () {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users', {
  //       method: 'GET',
  //   })
  //       const addressData = await res.json()
  //       streets = addressData.map((item) => item.address.street)
  //       console.log(streets)
  //       // streets = addressData.address.map(e => ({ street: e.street }))

  //     })()
  //   },[])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setRowData(data));
  }, [])

  return (
    <>
      <h1>hello</h1>
      <AgGridReact
        className="ag-theme-alpine"
        animateRows="true"
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowData={rowData}
        rowSelection="multiple"
        suppressRowClickSelection="true"
      />

    </>
  );

}
export default GridExample


 // useEffect(function () {
  //   (async function () {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
  //     const data = await response.json()
  //     if (response.ok) {
  //       setRowData(data)
  //     } else {
  //       alert(JSON.stringify(data))
  //     }
  //   })()
  // },[])
