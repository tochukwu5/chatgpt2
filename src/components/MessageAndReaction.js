import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import userAvatar from '../images/me.png';
import aiAvavar from '../images/robot.jpg';
import ChatMessage from './ChatMessage';



function MessageAndReaction({message, trimmedText}) {
  console.log(trimmedText )
  const [msg, setMsg] = useState('')

  useEffect(() => {
    let open_ai_response;

    openai_test();

async function openai_test() {
  
  var url = "https://api.openai.com/v1/engines/text-davinci-002/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer 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");

  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        console.log(xhr.status);
        open_ai_response = xhr.responseText;
        //  console.log(open_ai_response);
        // console.log(this.responseText.data.choices[0].text);
        console.log(open_ai_response)
          setMsg(open_ai_response)
     }};

     var data = `{
    "prompt": "${trimmedText}",
    "temperature": 0.7,
    "max_tokens": 256,
    "top_p": 1,
    "frequency_penalty": 0.75,
    "presence_penalty": 0
  }`;

  xhr.send(dat)
}
  },[])


  // answered by @bendytree at https://stackoverflow.com/a/24810220
  // const aiMessage = new Array(5).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);});
  const aiMessage = msg;

  return ( 
    <div className='flex flex-col mt-5'>
      <div className="self-end">
      <ChatMessage avatar={userAvatar} message={message} />
      </div>

      { aiMessage.length > 0 
      ?  <ChatMessage avatar={aiAvavar} message={aiMessage} /> 
    : ''  }
    </div>
  )
}

export default MessageAndReaction