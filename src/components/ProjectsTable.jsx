import React from "react";
import { Card, Table, Tag, Progress, Typography, Dropdown } from "antd";
import { FiMoreHorizontal } from "react-icons/fi";

const { Title } = Typography;

const statusColors = {
  "In Progress": { color: "blue", bg: "blue" },
  Completed: { color: "green" },
  Pending: { color: "orange" },
};

const dataSource = [
  {
    key: "1",
    name: "Dashboard UI",
    owner: "John Doe",
    status: "In Progress",
    dueDate: "May 25, 2026",
    progress: 60,
  },
  {
    key: "2",
    name: "Mobile App",
    owner: "Jane Smith",
    status: "Completed",
    dueDate: "May 18, 2026",
    progress: 100,
  },
  {
    key: "3",
    name: "Backend API",
    owner: "Mike Johnson",
    status: "Pending",
    dueDate: "Jun 10, 2026",
    progress: 30,
  },
  {
    key: "4",
    name: "Marketing Site",
    owner: "Emily Davis",
    status: "In Progress",
    dueDate: "Jun 22, 2026",
    progress: 45,
  },
];

const columns = [
  {
    title: "Project Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <span className="font-medium text-gray-800">{text}</span>,
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => <Tag color={statusColors[status]?.color}>{status}</Tag>,
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
  },
  {
    title: "Progress",
    dataIndex: "progress",
    key: "progress",
    render: (progress) => (
      <Progress
        percent={progress}
        size="small"
        strokeColor="#55B592"
        className="w-32"
      />
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Dropdown menu={{ items: [
        { key: "view", label: "View" },
        { key: "edit", label: "Edit" },
        { key: "delete", label: "Delete" },
      ] }}>
        <FiMoreHorizontal className="cursor-pointer text-gray-500" size={18} />
      </Dropdown>
    ),
  },
];

const ProjectsTable = () => {
  return (
    <Card bordered={false} className="rounded-xl shadow-sm">
      <Title level={5} className="!mb-4 !text-gray-800">
        Recent Projects
      </Title>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: 700 }}
      />
    </Card>
  );
};

export default ProjectsTable;
