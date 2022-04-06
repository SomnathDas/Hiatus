import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { SiRottentomatoes } from "react-icons/si";
import { AiOutlineCalendar } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import { BiTimeFive } from "react-icons/bi";
import Label from "./Label";

const ExpandedCard = ({
  imageUrl,
  synopsis,
  mobileUrl,
  rtScore,
  movieName,
  director,
  releaseDate,
  runTime,
  originalTitleRomanised,
  back,
}) => {
  /* Stylings */
  let divStyleDesktop = {
    background: "url(" + imageUrl + ") rgba(10, 9, 8, 0.5)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundPosition: "center",
  };

  let divStyleMobile = {
    background: "url(" + mobileUrl + ") rgba(10, 9, 8, 0.5)",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundPosition: "center",
    padding: "6rem 2rem",
  };
  /* Stylings */

  /* State to manage overflowing issue that arises due to initial animation */
  const [animationComplete, setAnimationComplete] = useState(false);

  return (
    <AnimatePresence exitBeforeEnter="true">
      {/* Main Container */}
      <motion.section
        className={`h-screen w-screen flex text-white ${
          !animationComplete ? "overflow-hidden" : ""
        }`}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1.5 }}
      >
        {/* SideBar */}
        <motion.div
          className={` bg-mainBackground flex  justify-center fixed h-full`}
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          exit={{ x: -1000 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.7 }}
          onAnimationComplete={() => setAnimationComplete(true)}
        >
          <button
            className={`bg-mainForeground md:w-14 md:h-14 h-12 w-12 rounded-full flex justify-center items-center m-4 hover:animate-pulse `}
            onClick={back}
          >
            <IoIosArrowBack size={20} color="white" />
          </button>
        </motion.div>
        {/* SideBar */}
        {/* Information Container */}
        <div className={`flex flex-col h-screen ml-16`}>
          {/* Movie-Banner for Desktop and Tablet */}
          <motion.div
            className={`md:flex hidden flex-col justify-center h-3/4 pl-8 `}
            style={divStyleDesktop}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 }}
          >
            <h1 className={`text-6xl font-bold`}>{movieName}</h1>
            <h2 className={`text-3xl font-light`}>{director}</h2>
          </motion.div>
          {/* Movie-Banner for Desktop and Tablet */}
          {/* Movie-Banner for Mobile */}
          <motion.div
            className={`md:hidden h-full flex flex-col justify-center pl-8`}
            style={divStyleMobile}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 }}
          >
            <h1 className={`text-2xl font-bold`}>{movieName}</h1>
            <h2 className={`text-xl font-light`}>{director}</h2>
          </motion.div>
          {/* Movie-Banner for Mobile */}
          {/* Movie Information */}
          <motion.div
            className={`h-full bg-mainBackground flex flex-col gap-4 pl-8`}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 0.6 }}
          >
            <div>
              <h2 className={`pt-4 pr-4 md:text-xl text-md`}>
                {"Original Title (Romanized): " + originalTitleRomanised}
              </h2>
            </div>
            <div className={`flex flex-col gap-4 pt-4 pr-4`}>
              <h2 className={`md:text-5xl text-4xl font-bold`}>Synopsis</h2>
              <p className={`md:text-xl text-md font-regular`}>{synopsis}</p>
            </div>
            {/* Bite Labels */}
            <div
              className={`flex md:flex-row flex-col justify-center items-center gap-4 mb-10`}
            >
              <Label
                icon={<SiRottentomatoes size={20} />}
                rtScore={rtScore + "%"}
              />
              <Label
                icon={<AiOutlineCalendar size={20} />}
                rtScore={releaseDate}
              />
              <Label
                icon={<BiTimeFive size={20} />}
                rtScore={runTime + " min"}
              />
            </div>
            {/* Bite labels */}
          </motion.div>
          {/* Movie Information */}
        </div>
        {/* Information Container */}
      </motion.section>
      {/* Main Container */}
    </AnimatePresence>
  );
};

export default ExpandedCard;
