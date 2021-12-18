import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, DashboardView } from "./components";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route path="dashboard" element={<DashboardView />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
