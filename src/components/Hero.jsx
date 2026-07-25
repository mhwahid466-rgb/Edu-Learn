import React from "react";
import { useNavigate } from "react-router";
import { FaArrowRight, FaPlay, FaLeaf, FaMugHot } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";

const Hero = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const section = document.getElementById("features");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="mx-4 mt-6 rounded-3xl bg-white px-6 py-12 shadow-md shadow-gray-200/70 md:mx-8 md:px-12 md:py-16 lg:mx-12"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-[#e7f6ef] px-4 py-1.5 text-sm font-medium text-[#55B592]">
            Welcome to EduLearn
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Learn Today,
            <br />
            <span className="text-[#55B592]">Lead Tomorrow</span>
          </h1>

          <p className="mt-5 max-w-md text-base text-gray-500">
            Study online with expert instructors and upgrade your skills
            anytime, anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="cursor-pointer rounded-lg bg-[#55B592] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#469c7d] hover:shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={handleLearnMore}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-[#55B592] hover:text-[#55B592]"
            >
              Learn More <FaArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative flex justify-center">
          <div className="relative flex h-72 w-full max-w-md items-center justify-center rounded-3xl bg-[#eef7f2] md:h-80">
            {/* Laptop */}
            <div className="relative z-10 w-64 md:w-72">
              <div className="rounded-t-xl border-8 border-gray-800 bg-white p-3">
                <div className="mb-2 flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                </div>
                <div className="flex h-24 items-center justify-center rounded-lg bg-[#dcf0e6]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#55B592] text-white shadow">
                    <FaPlay size={14} />
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="h-1.5 w-3/4 rounded bg-gray-200" />
                  <div className="h-1.5 w-1/2 rounded bg-gray-200" />
                </div>
              </div>
              <div className="h-3 rounded-b-md bg-gray-800" />
              <div className="mx-auto h-1.5 w-16 rounded-b-lg bg-gray-700" />
            </div>

            {/* Plant */}
            <div className="absolute bottom-6 left-6 hidden text-[#55B592] sm:block">
              <FaLeaf size={36} />
            </div>

            {/* Book stack */}
            <div className="absolute bottom-6 left-20 hidden sm:block">
              <HiOutlineBookOpen size={30} className="text-[#55B592]" />
            </div>

            {/* Mug */}
            <div className="absolute bottom-8 right-8 hidden text-[#55B592] sm:block">
              <FaMugHot size={28} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
