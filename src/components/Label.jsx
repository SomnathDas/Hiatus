import React from "react";

const Label = ({ icon, rtScore }) => {
  return (
    /* Container */
    <div
      className={` bg-mainForeground flex h-10 w-40 gap-4 rounded-full justify-center items-center`}
    >
      {icon}
      <p className={` text-xl`}>{rtScore}</p>
    </div>
    /* Container */
  );
};

export default Label;
