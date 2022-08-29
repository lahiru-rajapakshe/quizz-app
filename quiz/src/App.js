import {useState} from "react";
import QuizScreen from "./components/QuizScreen.js";
import QuizScreen from "./components/JoinScreen.js";
function App(){
const[isQuizStarted,setIsQuizStarted]=useState(false);

return(
<>
<Navbar/>
  <div className="quiz-container">
{
    isQuizStarted ? (
      <QuizScreen retry={()=>setIsQuizStarted(false)}/>
    ):(
      <JoinScreen start={()=>setIsQuizStarted(true)}/>
    )
    }
  </div>

</>
);
}
export default App;
