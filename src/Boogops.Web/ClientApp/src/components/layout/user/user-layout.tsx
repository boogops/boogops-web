import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import ContentSection from "./content-section";
import TopSection from "./top-section";

const UserLayout: FC = () => {
  return (
    <>
      <TopSection />
      <ContentSection>
        <Outlet />
      </ContentSection>
    </>
  );
};

export default UserLayout;
