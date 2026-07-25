import React, { useState } from "react";
import { Menu, ConfigProvider, Typography } from "antd";
import {
  FiHome,
  FiUsers,
  FiFolder,
  FiCheckSquare,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiPieChart,
} from "react-icons/fi";

const { Text } = Typography;

const menuItems = [
  { key: "/dashboard", icon: <FiHome size={18} />, label: "Dashboard" },
  { key: "/users", icon: <FiUsers size={18} />, label: "Users" },
  { key: "/projects", icon: <FiFolder size={18} />, label: "Projects" },
  { key: "/tasks", icon: <FiCheckSquare size={18} />, label: "Tasks" },
  { key: "/reports", icon: <FiBarChart2 size={18} />, label: "Reports" },
  { key: "/settings", icon: <FiSettings size={18} />, label: "Settings" },
];

const Sidebar = () => {
  const [activeKey, setActiveKey] = useState("/dashboard");

 const handleLogout = () => {
  localStorage.removeItem("token");
  sessionStorage.clear();
  window.location.href = "/signin";
};

  return (
    <aside className="w-[260px] h-full bg-white flex flex-col justify-between shrink-0 overflow-y-auto">
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 pt-7 pb-8">
          <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
            <FiPieChart size={20} />
          </div>
          <Text className="!text-[19px] !font-bold !text-gray-800 !leading-tight">
            My Dashboard
          </Text>
        </div>

        {/* Menu */}
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemSelectedBg: "#55B592",
                itemSelectedColor: "#FFFFFF",
                itemColor: "#4B5563",
                itemHoverBg: "#F0FAF6",
                itemHoverColor: "#55B592",
                itemBorderRadius: 12,
                itemHeight: 48,
                itemMarginInline: 12,
                itemMarginBlock: 6,
                iconSize: 18,
                fontSize: 15,
              },
            },
          }}
        >
          <Menu
            mode="inline"
            selectedKeys={[activeKey]}
            onClick={({ key }) => setActiveKey(key)}
            items={menuItems}
            className="border-none px-1 font-medium"
          />
        </ConfigProvider>
      </div>

      {/* Logout */}
      <div className="px-6 py-6 border-t border-gray-100 mt-6">
        <button
          type="button"
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-500 hover:text-red-600 font-medium text-[15px] transition-colors duration-200"
        >
          <FiLogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;