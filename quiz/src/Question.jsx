import React, { useEffect, useState } from 'react'
import { useLocation,Link } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase-config";
import axios from 'axios';
function Question({name,roll}) {
  useEffect(()=>{
    console.log(location.state.name," ",location.state.roll);
  })
const location=useLocation();
const [questions, setQuestions] = useState([]);
 
 
const [selectedoptions,setSelectedoptions] =useState(Array(questions.length).fill(null));
const [score, setScore] = useState(0);
const handleOption=(QuestionIndex,OptionIndex)=>{
  const newSelectedoptions =[...selectedoptions];
  newSelectedoptions[QuestionIndex]=OptionIndex;
  setSelectedoptions(newSelectedoptions);
}
// const checkAnswers =async (e) => {
//   let newScore = 0;
//   questions.forEach((question, index) => {
//     if (selectedoptions[index] === question.correctOptionIndex) {
//       newScore++;
//     }
//   });
//   setScore(newScore);
//   console.log(score);
//   let total=newScore;
//   let participant_Name=location.state.name;
//   let Roll=location.state.roll;
//   try {
//     await addDoc(collection(db, "user"), {
//       participant_Name,
//       Roll,
//       total,
//     });
    
//   } catch (error) {
//     console.log(error);
    
//   }
//   setScore(null);
// };
const checkAnswers =async (e) => {
  let newScore = 0;
  questions.forEach((question, index) => {
    if (selectedoptions[index] === question.correctOptionIndex) {
      newScore++;
      console.log('newscore:',newScore);
    }
  });
  setScore(newScore);
  
    let total=newScore;
    console.log(newScore);
  let participant_Name=location.state.name;
  let Roll=location.state.roll;
  try {
    await addDoc(collection(db, "user"), {
      participant_Name,
      Roll,
      total,
    });
    
  } catch (error) {
    console.log(error);
    
  }
 
  
};
useEffect(() => {
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://github.com/EFTEKHER/questionquiz/blob/main/question.json'); // Replace 'YOUR_API_ENDPOINT' with the actual endpoint URL
      setQuestions(response.data);
      setSelectedoptions(Array(response.data.length).fill(null)); // Reset selectedOptions when questions are fetched
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  fetchQuestions();
}, []);
  return (
    <div>
<h2>Question</h2>
<div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h3>{question.question}</h3>
          <ul typeof='none'>
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    value={optionIndex}
                    checked={selectedoptions[questionIndex] === optionIndex}
                    onChange={() => handleOption(questionIndex, optionIndex)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))
    }
    <Link to={"/answer"}><button onClick={checkAnswers}>submit</button>
    </Link>
    </div>
      
    </div>
  )
}

export default Question;
