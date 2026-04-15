import "./Home.css";
import {useState , useEffect , useRef} from "react";

function Home(props)
{

    let [question,setQuestion] = useState("");
    let [answer,setAnswer] = useState("");
    let [wpm,setWpm] = useState(0);
    let [accuracy,setAccuracy] = useState(0);
    let [completed,setCompleted] = useState(false);
    let startTime = useRef(null); /*useRef create a obj having a variable current where whatever we
    e pass the value is set as default when called it start from it */

    let reset = ()=>{
        
        setQuestion(questionbox[Math.floor(Math.random() * questionbox.length)]); //later to be set random
        // math.floor drops the decimal of the generated number math.random() 0-1 any number 1 exclusive
        setAnswer("");
        setWpm(0);
        setAccuracy(0);
        setCompleted(false);
        startTime.current = null;
    }

    useEffect(()=>reset(),[])

    let handleChange = (event)=>{
        if(startTime.current === null)
        {
            startTime.current=Date.now();
        }
        setAnswer(event.target.value);
        calculatResult(event.target.value);

    }

    let calculatResult = (a)=>{

        if(a.length===0)
        {
            setAccuracy(0);
            return;
        }
        
        let totalChars = a.length;
        let correctChars = [...a].filter((ele,i)=>ele===question[i]).length;

        let acc = Math.round((correctChars/totalChars)*100);
        setAccuracy(acc);

        let endTime = Date.now();
        if(startTime === endTime)
        {
            setWpm(0)
        }
        let timeTaken = (endTime - startTime.current)/60000 // 1000 ms is 1 sec 60 sec is 1 minute therefore divide by 60k
        totalChars = a.length;

        let totalWords = totalChars/5;
        let currentWpm = Math.round(totalWords/timeTaken);
        setWpm(currentWpm)

        if (question.length === a.length)
        {
            setCompleted(true)
            if(currentWpm>props.best && question === a){
                props.setBest(currentWpm);
            }
        }
    }

    let questionbox = [
        "I have 2 apples and 3 oranges, which means I can make a delicious fruit salad.",
        "Today is 12th March, 2025, and the weather forecast says it will rain later.",
        "A rectangle has 4 sides and 4 angles, making it one of the simplest shapes.",
        "The bus arrived at 8:15 AM, just in time for the students to get to school.",
        "There are 24 hours in a day, but sometimes it feels like we need more time.",
      ];
    

  
    return <div style={{margin: "80px auto"}} 
            className="typing-container">  
            <p className="question"
            onCopy = {(event)=>{event.preventDefault()}}
            
            
            >{[...question].map((ele,i)=>{
                return <span className={ele===answer[i]?"correct":answer[i]?"wrong":""}>{ele}</span>
            })
            }</p>
    
            <textarea className="answer" placeholder="Start typing here..."
            onChange={handleChange}
            value={answer}
            disabled = {completed}
            onPaste = {(event)=>{event.preventDefault()}}
            
            
             
            />

            <div className="stats">
                <p>WPM : {wpm}</p>
                <p>Accuracy: {accuracy}%</p>
            </div>
            <button onClick={reset} className="restart-btn">Restart</button>

    </div>
    
}

export default Home;