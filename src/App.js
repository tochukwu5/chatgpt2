import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Ai from "./components/Ai";
import MessageAndReaction from "./components/MessageAndReaction";
import Navbar from "./components/Navbar";
import UserInput from "./components/UserInput";

function App() {
const dummy = useRef() 

  const [messages, setMessages] = useState([]);
  let trimmedText;
  const [a, setA] = useState('')

  function handlesubmit(text){
     trimmedText = text.trim();
    console.log(trimmedText)
    setA(trimmedText)

    if(trimmedText.length > 0){
      const newMessages = [...messages];
      newMessages.push(text);
      setMessages(newMessages);
    } else{
        alert('enter a text first')
    }
  }
  // console.log(a)
  useEffect(() => {
    dummy.current?.scrollIntoView({ behavior: 'smooth' })
  },[handlesubmit])

  return (
    <div className="App bg-slate-900 min-h-full  pb-4">
      <Navbar />
      <div className="w-11/12 md:p-10 mt-20 mb-24">
        < Ai />

        {messages.map((message, i) => <MessageAndReaction key={i} message={message} trimmedText={a} />)}
       <div ref={dummy}></div>
      </div>
      <div className="flex pl-5">      
              <UserInput handlesubmit={handlesubmit} />
</div>

    </div>
  );
}

export default App;
