import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { DashboardView, UserLayout } from "./components";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>
        <Route index element={<DashboardView />} />
      </Route>
    </Routes>
  );
};

export default App;
