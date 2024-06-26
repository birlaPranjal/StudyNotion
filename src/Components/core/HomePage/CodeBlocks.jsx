import React from "react";
import CTAButton from "./CTAButton";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks = ({
  position,
  heading,
  subHeading,
  CTA1,
  CTA2,
  codeBlock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={` flex ${position} my-20 justify-between gap-10 `}>
      <div className=" flex flex-col gap-8 w-1/2">
        {heading}
        <div className=" text-richblack-300 font-bold ">{subHeading}</div>
        <div className="flex gap-7 mt-7">
          <CTAButton active={CTA1.active} linkTo={CTA1.linkTo}>
            <div className=" flex gap-2 items-center">
              {CTA1.text}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={CTA2.active} linkTo={CTA2.linkTo}>
            {CTA2.text}
          </CTAButton>
        </div>
      </div>

      <div className="h-fit flex flex-row text-[10px] w-1/2 lg:w-[500px]">
        {/* TODO: COLOR Gradient  */}

        <div className=" text-center flex text-[1.1rem] flex-col w-[10%] text-richblack-400 font-inter font-bold">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>

        <div
          className={`w-[90%] h-full flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codeBlock, 2000, ""]}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
              fontSize:"1.09rem"
            }}
            omitDeletionAnimation={true}

          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
