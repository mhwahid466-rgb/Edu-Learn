import React from "react";
import { Input, Avatar, Badge, Typography } from "antd";
import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

const { Title, Text } = Typography;

const Header = () => {
  return (
    <header className="h-[70px] bg-white rounded-xl shadow-sm flex items-center justify-between px-6">
      <Title level={4} className="!mb-0 !text-gray-800">
        Dashboard
      </Title>

      <div className="flex items-center gap-6">
        <Input
          placeholder="Search..."
          prefix={<FiSearch className="text-gray-400" />}
          className="w-64 rounded-lg"
        />

        <Badge count={3} size="small">
          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors duration-200">
            <FiBell size={18} className="text-gray-600" />
          </div>
        </Badge>

        <div className="flex items-center cursor-pointer">
          <Avatar className="bg-primary text-white font-semibold ">AD</Avatar>
          <Text className="font-medium text-gray-700">Admin User</Text>
          <FiChevronDown className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};

export default Header;
