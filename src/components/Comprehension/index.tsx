import React, { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

function Comprehension() {
  const fetchQuestion = async () => {
    let result = await fetch("http://localhost:5000/fetch_all_questions");
    let result2 = await result.json();
    setQuestion(result2.question);
    setCompreh(result2.Comprehension);
    setOption1(result2.option1);
    setOption2(result2.option2);
    setOption3(result2.option3);
    setOption4(result2.option4);
  };

  useEffect(function () {
    fetchQuestion();
  });

  var navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [compreh, setCompreh] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const hanleSubmit = async () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Submit it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        let result = await fetch("http://localhost:5000/submit", {
          method: "post",
          body: JSON.stringify({ question, answer }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        Swal.fire("Submit!", "Your Record has been Submited.", "success");
        navigate("/success");
      } else {
        Swal.fire("Cancelled", "Your imaginary Record is safe :)", "error");
      }
    });
  };

  return (
    <div className="w-3/5 h-85 flex justify-center flex-col rounded-2xl m-5 bg-emerald-100">
      <div className="font-bold text-2xl self-center mt-5">Comprehension</div>

      <div className="font-bold m-3 bg-yellow-50 rounded-md p-5">{compreh}</div>
      <div>
        <span className="font-bold text-xl m-3">Question :</span>
        <div className="font-bold m-2">{question}</div>
        <div className="m-5">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              //   defaultValue="female"
              name="radio-buttons-group"
              onChange={(event) => setAnswer(event.target.value)}
            >
              <FormControlLabel
                value={option1}
                control={<Radio />}
                label={option1}
              />
              <FormControlLabel
                value={option2}
                control={<Radio />}
                label={option2}
              />
              <FormControlLabel
                value={option3}
                control={<Radio />}
                label={option3}
              />
              <FormControlLabel
                value={option4}
                control={<Radio />}
                label={option4}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="m-5">
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={hanleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Comprehension;
