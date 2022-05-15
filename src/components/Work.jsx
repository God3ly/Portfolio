import React from "react";
import workImg from "../assets/workImg.jpeg";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <WorkCard img={workImg} demoLink="" codeLink="" />
          <WorkCard img={workImg} demoLink="" codeLink="" />
          <WorkCard img={workImg} demoLink="" codeLink="" />
          <WorkCard img={workImg} demoLink="" codeLink="" />
          <WorkCard img={workImg} demoLink="" codeLink="" />
          <WorkCard img={workImg} demoLink="" codeLink="" />
        </div>
      </div>
    </div>
  );
};

export default Work;
