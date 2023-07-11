import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddContact from "../pages/AddContact";
import EditContact from "../pages/EditContact";
import MainLayout from "../layouts/MainLayout";
import NotFoundPage from "../pages/NotFoundPage";

function MainRoute() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
