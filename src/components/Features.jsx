import React from "react";
import { Card } from "antd";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const FEATURES = [
  {
    icon: <HiOutlineBookOpen size={26} />,
    title: "Online Courses",
    description: "Access a wide range of courses from anywhere.",
  },
  {
    icon: <FaRegUserCircle size={24} />,
    title: "Expert Teachers",
    description: "Learn from industry experts and professionals.",
  },
  {
    icon: <MdOutlineWorkspacePremium size={26} />,
    title: "Certifications",
    description: "Earn certificates and boost your career.",
  },
  {
    icon: <HiOutlineBriefcase  size={22} />,
    title: "Career Support",
    description: "Get guidance and support to achieve your goals.",
  },
];

const Features = () => {
  return (
    <section id="features" className="mx-4 mt-10 md:mx-8 lg:mx-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <Card
            key={feature.title}
            bordered={false}
            className="cursor-pointer rounded-2xl text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e7f6ef] text-[#55B592]">
              {feature.icon}
            </div>
            <h3 className="text-base font-bold text-gray-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
