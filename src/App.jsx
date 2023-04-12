import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import questions from "./data";
function App() {
  const [data, setData] = useState(questions);
  console.log("APp");
  console.log(data);
  return (
    <main className="h-screen bg-gray-800 flex flex-col justify-center items-center ">
      <div className="h-fit w-6/12 bg-white rounded-md shadow-md  p-3">
        {data.map((list) => {
          console.log("map");
          console.log(list);
          return <Question ques={list} />;
        })}
      </div>
    </main>
  );
}

export default App;
