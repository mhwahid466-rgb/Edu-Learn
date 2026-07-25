import React from "react";
import { Card, Typography, Select } from "antd";

const { Title } = Typography;

const dataPoints = [40, 60, 32, 78, 45, 88, 62];
const labels = ["May 1", "May 8", "May 15", "May 22", "May 29", "Jun 5", "Jun 12"];

const chartWidth = 600;
const chartHeight = 220;
const maxValue = 100;

const getCoordinates = () => {
  const stepX = chartWidth / (dataPoints.length - 1);
  return dataPoints.map((value, index) => ({
    x: index * stepX,
    y: chartHeight - (value / maxValue) * chartHeight,
  }));
};

const buildSmoothPath = (points) => {
  if (points.length < 2) return "";
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i += 1) {
    const current = points[i];
    const next = points[i + 1];
    const midX = (current.x + next.x) / 2;
    path += ` Q ${midX} ${current.y} ${midX} ${(current.y + next.y) / 2}`;
    path += ` Q ${midX} ${next.y} ${next.x} ${next.y}`;
  }
  return path;
};

const OverviewCard = () => {
  const points = getCoordinates();
  const linePath = buildSmoothPath(points);
  const areaPath = `${linePath} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <Card bordered={false} className="rounded-xl shadow-sm h-full">
      <div className="flex items-center justify-between mb-4">
        <Title level={5} className="!mb-0 !text-gray-800">
          Overview
        </Title>
        <Select
          defaultValue="month"
          className="w-32"
          options={[
            { value: "week", label: "This Week" },
            { value: "month", label: "This Month" },
            { value: "year", label: "This Year" },
          ]}
        />
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`}
          className="w-full h-56"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="overviewGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#55B592" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#55B592" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0, 1, 2, 3, 4].map((line) => (
            <line
              key={line}
              x1="0"
              y1={(chartHeight / 4) * line}
              x2={chartWidth}
              y2={(chartHeight / 4) * line}
              stroke="#F0F0F0"
              strokeWidth="1"
            />
          ))}

          <path d={areaPath} fill="url(#overviewGradient)" />
          <path d={linePath} fill="none" stroke="#55B592" strokeWidth="3" />

          {points.map((point, index) => (
            <circle
              key={labels[index]}
              cx={point.x}
              cy={point.y}
              r="5"
              fill="#55B592"
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          ))}

          {labels.map((label, index) => (
            <text
              key={label}
              x={points[index].x}
              y={chartHeight + 24}
              fontSize="12"
              fill="#9CA3AF"
              textAnchor="middle"
            >
              {label}
            </text>
          ))}
        </svg>
      </div>
    </Card>
  );
};

export default OverviewCard;
