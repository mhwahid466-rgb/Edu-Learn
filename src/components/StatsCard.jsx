import React from "react";
import { Card, Typography } from "antd";

const { Text, Title } = Typography;

const StatsCard = ({ title, value, icon, delta, deltaLabel, positive }) => {
  return (
    <Card
      bordered={false}
      className="rounded-xl shadow-sm hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
          {icon}
        </div>
        <div>
          <Text className="text-gray-500">{title}</Text>
          <Title level={3} className="!mb-0 !mt-0 !text-gray-800">
            {value}
          </Title>
        </div>
      </div>
      <Text className={`text-xs ${positive ? "text-primary" : "text-red-500"}`}>
        {positive ? "+" : "-"}
        {delta} {deltaLabel}
      </Text>
    </Card>
  );
};

export default StatsCard;
