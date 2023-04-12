import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
export const Question = ({ ques }) => {
  const { title, info } = ques;
  console.log("Questions.jsx");
  console.log(ques);
  console.log(title);
  console.log(info);
  return (
    
      <div className=" border-2 border-solid border-blue-500 bg-slate-400 px-4 py-6 rounded-2xl drop-shadow-xl mt-2">
        <div className=" flex justify-between ">
          <h2>{title}</h2>
          <div>
            <AiFillPlusCircle className="cursor-pointer text-xl " />
          </div>
        </div>
        <h3 className="mt-2">{info}</h3>
      </div>
  );
};
export default Question;
