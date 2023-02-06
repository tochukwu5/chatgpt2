
function ChatMessage({message, avatar}) {

  return (
    <div className='p-3 mt-4 flex max-w-[380px] md:max-w-[580px] '>

<div className="mr-3">
     <div className="w-12 h-12 rounded-full overflow-hidden"> 
    <img className='object-cover mb-2 w-full' src={avatar} alt="" />
    </div>
    {/* <p className="text-center text-white  text-lg">ME</p> */}
      </div>
      

    <div className="p-3 rounded-2xl bg-slate-700 text-white">
      <p>
         {message}
      </p>
    </div>

    </div>
  )    
}

export default ChatMessage;