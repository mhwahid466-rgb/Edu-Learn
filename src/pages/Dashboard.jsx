import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import { FiUsers, FiFolder, FiClipboard, FiDollarSign } from "react-icons/fi";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import StatsCard from "../components/StatsCard.jsx";
import OverviewCard from "../components/OverviewCard.jsx";
import ActivityCard from "../components/ActivityCard.jsx";
import ProjectsTable from "../components/ProjectsTable.jsx";

const { Text } = Typography;

const stats = [
  {
    title: "Total Users",
    value: "120",
    icon: <FiUsers size={20} />,
    delta: "12",
    deltaLabel: "from last month",
    positive: true,
  },
  {
    title: "Total Projects",
    value: "24",
    icon: <FiFolder size={20} />,
    delta: "3",
    deltaLabel: "from last month",
    positive: true,
  },
  {
    title: "Total Tasks",
    value: "86",
    icon: <FiClipboard size={20} />,
    delta: "5",
    deltaLabel: "from last month",
    positive: false,
  },
  {
    title: "Total Revenue",
    value: "$12,540",
    icon: <FiDollarSign size={20} />,
    delta: "18%",
    deltaLabel: "from last month",
    positive: true,
  },
];

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-background flex items-center justify-center overflow-hidden p-3 md:p-5">
      <div className="w-full h-full max-w-[1600px] flex flex-row rounded-3xl shadow-xl overflow-hidden">
        <Sidebar />

        <div className="flex-1 min-w-0 h-full overflow-y-auto bg-background">
          <div className="p-6 flex flex-col gap-6">
            <Header />

            {/* Row 1: Stats */}
            <Row gutter={[24, 24]}>
              {stats.map((stat) => (
                <Col xs={24} sm={12} lg={6} key={stat.title}>
                  <StatsCard {...stat} />
                </Col>
              ))}
            </Row>

            {/* Row 2: Overview + Activity */}
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <OverviewCard />
              </Col>
              <Col xs={24} lg={8}>
                <ActivityCard />
              </Col>
            </Row>

            {/* Row 3: Projects Table */}
            <Row>
              <Col span={24}>
                <ProjectsTable />
              </Col>
            </Row>

            <Divider className="!my-2" />

            <Text className="text-center text-gray-400 text-sm pb-4">
              © 2026 My Dashboard
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
