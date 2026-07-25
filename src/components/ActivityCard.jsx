import React from "react";
import { Card, List, Typography, Button } from "antd";

const { Title, Text } = Typography;

const activities = [
  { id: 1, text: "New user registered", time: "2 min ago" },
  { id: 2, text: "Project \u201cDashboard\u201d created", time: "1 hour ago" },
  { id: 3, text: "Task \u201cUI Design\u201d completed", time: "2 hours ago" },
  { id: 4, text: "Report generated", time: "5 hours ago" },
  { id: 5, text: "User login", time: "1 day ago" },
];

const ActivityCard = () => {
  return (
    <Card bordered={false} className="rounded-xl shadow-sm h-full flex flex-col">
      <Title level={5} className="!mb-2 !text-gray-800">
        Recent Activity
      </Title>

      <List
        itemLayout="horizontal"
        dataSource={activities}
        renderItem={(item) => (
          <List.Item className="!border-gray-100">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <Text className="text-gray-700">{item.text}</Text>
            </div>
            <Text className="text-xs text-gray-400">{item.time}</Text>
          </List.Item>
        )}
      />

      <Button block className="mt-2 rounded-lg">
        View All
      </Button>
    </Card>
  );
};

export default ActivityCard;
