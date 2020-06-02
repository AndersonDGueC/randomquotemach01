import React from 'react'
import {AiFillTwitterSquare} from 'react-icons/ai'
const Buttons=({author,text,check})=>{
    return(
    <div className="d-flex justify-content-between">
       
    <a className="btn btn-primary  p-0 m-0" id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${text}-${author}`} target="_blank"><AiFillTwitterSquare size={50}/> </a>
    <button  id="new-quote" className="btn btn-primary"onClick={check}>Clickme</button>
    </div>
    )
}

export default Buttons;