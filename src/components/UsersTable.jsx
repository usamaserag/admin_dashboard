import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function UsersTable({ rows, handleDeleteField }) {
  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "img",
      headerName: "Avatar",
      width: 80,
      renderCell: (params) => {
        return (
          <img
            src={
              params.row.img ||
              "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
            }
            alt=""
            className="w-8 h-8 rounded-full"
          />
        );
      },
    },
    {
      field: "displayName",
      headerName: "Name",
      width: 100,
      editable: true,
    },
    {
      field: "email",
      headerName: "E-mail",
      width: 140,
      editable: true,
    },
    {
      field: "address",
      headerName: "Address",
      width: 120,
      editable: true,
    },
    {
      field: "country",
      headerName: "Country",
      width: 100,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="flex gap-2 items-center">
            <button className="text-blue-500">
              <EditIcon sx={{ fontSize: 18 }} />
            </button>
            <button
              className="text-red-500"
              onClick={() => handleDeleteField(params.row.id)}
            >
              <DeleteIcon sx={{ fontSize: 18 }} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
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
      />
    </Box>
  );
}
