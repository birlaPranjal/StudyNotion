import React from "react";
import instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className=" mt-16">
      <div className=" flex flex-row gap-10 items-center ml-7">
        <div className="w-[50%]">
          <img
            src={instructor}
            alt="instructor"
            className=" shadow-white pl-3"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-10 items-start">
          <div className=" text-4xl font-semibold w-1/2">
            Become an
            <HighlightText text={" Instructor"} />
          </div>
          <p className=" font-medium text-[16px] w-4/5 text-richblack-300">
            Instructors from around the world teach millions of students on
            StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <CTAButton active={true} linkTo={"/signup"}>
            <div className="flex flex-row gap-2 items-center">
             Start Learning  Today 

             <FaArrowRight/>
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
