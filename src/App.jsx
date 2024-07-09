import { useState } from 'react'

function App() {
  // state variables
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  // Quiz Questions object
  const questions = [
    {
      question: 'Where does the sun rise?',
      options: ['east', 'west', 'south', 'north'],
      answer: 'east',
    },
    {
      question: 'What is the capital of Pakistan?',
      options: ['peshawar', 'islamabad', 'kohat', 'hangu'],
      answer: 'islamabad',
    },
    {
      question: 'Who is the father of Modern Computer?',
      options: ['Smith', 'Konrad Zuse', 'Atanasoff', 'Charles Babbage'],
      answer: 'Charles Babbage',
    },
  ]

  function handleOptionClick(optionSelected) {
    // score
    if (optionSelected === questions[currentQuestion].answer) {
      setScore(score + 1)
    }
    // next question
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
    // if last : then show score
  }

  return (
    <div className='root-container'>
      {/* app heading */}
      <h1 className='main-heading'>Quiz Application</h1>
      {showScore ? (
        <p>You have got {score} out of {questions.length}</p>
      ) : (
        <>
          {/* current question */}
          <h3 className='current-question'>{questions[currentQuestion].question}</h3>
          <div className='options-container'>
            {/* current question options */}
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default App
