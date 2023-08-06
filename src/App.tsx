import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomForm from "./components/CustomForm";
import Successfull from "./components/Successfull";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<CustomForm />} path="/" />
          <Route element={<Successfull />} path="/success" />
        </Routes>
      </Router>

      <footer className="bg-gray-100 text-center text-gray-500 py-4 pt-7">
        <p>
          Developed by
          <a
            href="https://github.com/imchiraghere/"
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
          >
            @imchiraghere
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
