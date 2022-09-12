import QuestionList from "../data/questions.json";

function QuizScreen(){
    const [currentQuestionIndex, setCurrentQuestion]=useState(0);
    const [markedAnswers,setMarkedAnswers ]=useState(new Array(QuestionList.length))
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    return (
        <div className="quiz-screen">
            {
                isQuestionEnd?(
                    <QuizResult/>
                ):(
                    <Question
                    question={QuestionList[currentQuestionIndex]}
                    totalQuestions={ QuestionList.length}
                    currentQuestion={currentQuestionIndex+1}
                    setAnswer={{index}=>{
                        setMarkedAnswers((arr)=>
                        {

                        });
                    }}
                    
                    
                    />
                )
            }
        </div>
    )

}
export default QuizScreen;
