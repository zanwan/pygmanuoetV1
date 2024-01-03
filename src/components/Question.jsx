import { questions } from "../constants";

const Question = () => {
  return (
    <div className="flex flex-col mx-8 md:w-1/2 justify-center md:mx-auto mt-8">
      {questions.map((question) => (
        <div key={question.id} className="my-4">
          <p className="text-2xl font-notoSerifTC font-bold">
            {question.question}
          </p>
          <p className="text-md font-notoSerifTC">{question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Question;
