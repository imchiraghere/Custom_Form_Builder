import Cloze from "../Cloze/ClozeMain/Cloze";
import Comprehension from "../Comprehension";
import Incorporate from "../Incorporate";

function CustomForm() {
  return (
    <>
      <div className="flex flex-col items-center bg-gray-200 min-h-screen">
        <h1 className="text-3xl font-bold mt-8 mb-8">
          Solve this Question !!!
        </h1>
        <Incorporate />
        <Cloze />
        <Comprehension />
      </div>
    </>
  );
}

export default CustomForm;
