import React from "react";
import Sidebar from "../../layouts/admin/Sidebar";
import Header from "../../layouts/admin/Header";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  return (
    <>
      <div className="flex relative bg-gradient-to-br from-redish via-bluish to-darkblue">
        <Sidebar />
        <Header />
        <main className="flex-1 mt-[100px] ms-5">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default PrivateRoute;
