import React from "react";
import { AdminUIProvider } from "./adminUIContext";
import AdminRouter from "./adminroute";

const Admin = () => {
  return (
    <AdminUIProvider>
      <AdminRouter />
    </AdminUIProvider>
  );
};
export default Admin;
