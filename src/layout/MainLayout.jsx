import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Headers";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
