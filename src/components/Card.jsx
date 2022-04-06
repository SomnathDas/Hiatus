import React from "react";
import { motion } from "framer-motion";

const Card = ({ imageUrl, onClick, title }) => {
  return (
    /* Container */
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
      className={`cursor-pointer`}
    >
      <img
        src={imageUrl}
        alt="Movie Poster"
        className={`rounded-sm hover:opacity-70 transition-all`}
      />
      <h1 className={`text-center `}>{title}</h1>
    </motion.div>
    /* Container */
  );
};

export default Card;
