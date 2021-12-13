import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import pieChart2Fill from "@iconify/icons-eva/pie-chart-2-fill";

const getIcon = (name: IconifyIcon) => {
  return <Icon icon={name} width={22} height={22} />;
};

const sidebarConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon(pieChart2Fill),
  },
];

export default sidebarConfig;
