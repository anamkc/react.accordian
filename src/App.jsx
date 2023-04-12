import { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import questions from "./data";
function App() {
  const [data, setData] = useState(questions);

  return (
    <main className="h-screen bg-gray-800 flex justify-center items-center ">
      {data.map((list) => {
        <Question ques={list} />;
      })}
    </main>
  );
}

export default App;
