import QuestionList from "../data/questions.json";

function QuizScreen(){
    const [currentQuestionIndex, setCurrentQuestion]=useState(0);
    const [markedAnswers,setMarkedAnswers ]=useState(new Array(QuestionList.length))
    return "quiz-screen";

}
export default QuizScreen;
