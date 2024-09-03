import { useState } from "react";
import question from "./questions";

function App() {
  const [questions, setquestions] = useState(question);
  const [currentId, setcurrentId] = useState(null);

  return (
    <>
      <div
        className={`container cursor-pointer mx-auto w-[80%] my-10 flex flex-wrap justify-between items-stretch text-center`}
      >
        {questions.map((question) => (
          <div
            onClick={() =>
              setcurrentId(question.id == currentId ? null : question.id)
            }
            className={currentId == question.id ? `selected all` : `not all`}
            key={question.id}
          >
            <p>
              {currentId === question.id ? question.answar : question.question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
