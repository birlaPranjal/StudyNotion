import React from "react";
import HighlightText from "./HighlightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";

const LearningLanguageSection = () => {
  return (
    <div className=" mt-[130px] mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className=" text-4xl font-semibold text-center">
          Your Swiss Knife for
          <HighlightText text={" learning any language"} />
        </div>
        <div className=" text-center text-richblack-600 mx-auto text-base mt-3 w-[70%] font-medium">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex flex-row items-center flex-wrap justify-center mt-5">
          <img
            src={knowYourProgress}
            alt="know your progress"
            className=" object-contain -mr-32"
          />
          <img
            src={compareWithOthers}
            alt="know your progress"
            className=" object-contain"
          />
          <img
            src={planYourLessons}
            alt="know your progress"
            className=" object-contain -ml-36"
          />
        </div>
        <div>
          <CTAButton active={true} linkTo={"/signup"}>
            <div >
              learn more
            </div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
