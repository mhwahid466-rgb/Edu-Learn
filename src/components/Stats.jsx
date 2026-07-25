import React from "react";
import { FaUsers, FaTrophy } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

const STATS = [
  { icon: <FaUsers size={22} />, value: "5000+", label: "Students" },
  { icon: <HiOutlineBookOpen size={22} />, value: "120+", label: "Courses" },
  { icon: <FaRegUserCircle size={22} />, value: "50+", label: "Teachers" },
  { icon: <FaTrophy size={22} />, value: "95%", label: "Success Rate" },
];

const Stats = () => {
  return (
    <section className="mx-4 mt-10 md:mx-8 lg:mx-12">
      <div className="grid grid-cols-2 gap-8 rounded-2xl bg-white px-6 py-8 shadow-md shadow-gray-200/70 md:grid-cols-4 md:px-10">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7f6ef] text-[#55B592]">
              {stat.icon}
            </span>
            <div>
              <p className="text-xl font-extrabold text-gray-900 md:text-2xl">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
