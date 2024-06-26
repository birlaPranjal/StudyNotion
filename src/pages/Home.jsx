import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../Components/core/HomePage/HighlightText";
import CTAButton from "../Components/core/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/core/HomePage/CodeBlocks";
import TimelineSection from "../Components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../Components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../Components/core/HomePage/InstructorSection";


const Home = () => {
  return (
    <div>
      <div className=" relative max-w-maxContent mx-auto flex flex-col w-11/12 items-center justify-between text-white ">
        <Link to={"/signup"}>
          {/* TODO: Shadow for button */}
          <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 text-richblack-200 transition-all duration-200 hover:scale-95">
            <div className=" group-hover:bg-richblack-900 flex items-center gap-2 rounded-full px-10 py-[5px]">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className=" text-center text-4xl font-semibold mt-7 ">
          Empower Your future with <HighlightText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-7 mt-8">
          <CTAButton active={true} linkTo={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkTo={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* TODO: Shadow below */}
        <div className=" mx-3 my-12 shadow-blue-200">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        <div className="">
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className=" text-4xl font-semibold">
                Unlock your <HighlightText text={"coding potential"} /> with our
                online courses.
              </div>
            }
            subHeading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            CTA1={{
              text: "try it yourself",
              linkTo: "/signup",
              active: true,
            }}
            CTA2={{
              text: "learn more",
              linkTo: "/login",
              active: false,
            }}
            codeBlock={
              '<!DOCTYPE html> \n <html lang="en"> \n <head> \n <title>Example</title> \n <link rel="stylesheet" href="style.css"> \n </head> \n <body> \n <h1><a href="/">Header</a> </h1> \n <nav> \n <a href="one/">One</a> \n </nav>'
            }
            codeColor={"text-yellow-25"}
          />
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className=" text-4xl font-semibold">
                Start <HighlightText text={" coding in seconds "} />
              </div>
            }
            subHeading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            CTA1={{
              text: "Continue Lesson",
              linkTo: "/signup",
              active: true,
            }}
            CTA2={{
              text: "learn more",
              linkTo: "/login",
              active: false,
            }}
            codeBlock={
              '<!DOCTYPE html> \n <html lang="en"> \n <head> \n <title>Example</title> \n <link rel="stylesheet" href="style.css"> \n </head> \n <body> \n <h1><a href="/">Header</a> </h1> \n <nav> \n <a href="one/">One</a> \n </nav>'
            }
            codeColor={"text-yellow-25"}
          />
        </div>
      </div>

      <div className=" bg-pure-greys-5 text-richblack-700 ">
        <div className="homepage_bg h-[310px] flex items-center ">
          <div className=" w-11/12 max-w-maxContent flex items-center gap-5 mx-auto ">
            <div className=" flex flex-row gap-7 text-white mx-auto">
              <CTAButton active={true} linkTo={"./signup"}>
                <div className="flex items-center gap-3">
                  Explore full catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkTo={"./login"}>
                <div>learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="  w-11/12 max-w-maxContent flex flex-col justify-center items-center gap-7 mx-auto">

          <div className=" flex flex-row gap-5 justify-center mb-10 mt-[95px]">
            <div className=" text-4xl font-semibold w-[45%]">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>

            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className=" text-base">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkTo={"/signup"}>
                learn more
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div>
      </div>

      <div className=" w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <InstructorSection/>
        <h2 className=" text-center text-4xl font-semibold mt-10">Review from other learners</h2>
      </div> 

    </div>
  );
};

export default Home;
