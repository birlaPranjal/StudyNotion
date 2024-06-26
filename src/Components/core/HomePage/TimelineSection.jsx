import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";
const timeline = [
  {
    logo: logo1,
    heading: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: logo2,
    heading: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: logo3,
    heading: "Flexibility",
    description: "The ability to switch is an important skills",
  },
  {
    logo: logo4,
    heading: "Solve the problem",
    description: "Code your way to a solution",
  },
];

const TimelineSection = () => {
  return (
    <div className=" my-10">
      <div className="flex flex-row gap-5 items-center p-2 m-2">
        <div className="flex flex-col w-[45%] gap-5">
          {timeline.map((element, index) => {
            return (
              <div className="flex flex-row gap-6" key={index}>
                <div className=" w-12 h-12 bg-white flex items-center ">
                  <img src={element.logo} alt="logo" />
                </div>
                <div>
                  <h2 className=" font-semibold text-[18px] ">
                    {element.heading}
                  </h2>
                  <p className=" text-base">{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className=" relative shadow-blue-200">
          <img
            src={timelineImage}
            alt="timeline"
            className=" h-fit object-cover shadow-white p-5"
          />
          <div className=" absolute translate-x-[-50%] translate-y-[-70%] left-[50%] bg-caribbeangreen-700 flex flex-row text-white uppercase py-7">
            <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
              <p className=" font-bold text-3xl">10</p>
              <p className=" text-caribbeangreen-300 text-sm">
                YEARS EXPERIENCES
              </p>
            </div>
            <div className="flex gap-5 items-center px-7 ">
            <p className=" font-bold text-3xl">250</p>
              <p className=" text-caribbeangreen-300 text-sm">
                type of courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
