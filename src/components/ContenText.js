import React, { Component } from 'react'
import Buttons from './Buttons'

class ContentText extends Component{
constructor(props){
    super(props);
    this.state={
        text:[ ],
        selectText:0

    }
    this.randomIndex=this.randomIndex.bind(this)
}


 componentDidMount(){
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then((response)=>{
        return response.json()
    }).then(data=>{
        
        this.setState({
            text:data.quotes    
            
        },this.randomIndex
        );
        
    })
   
}
randomIndex=()=>{
    let randomNum=Math.floor(Math.random()*(this.state.text.length));
   this.setState({
       selectText:randomNum
   })
  // console.log(this.state.selectText)

}

render(){    
    let{text, selectText}=this.state;
    
   // console.log(selectText)
    const phrase=text[selectText]
    //console.log(phrase)
    //const phrase=phrases.author
    //console.log(phrases.quote)
    return(
    <>
    <div className="mb-4">
    {phrase&&<p id="text">{phrase.quote}</p>}
    {phrase&&<cite className="d-block text-right" id="author">-{phrase.author}</cite>}
    </div>
    {
    phrase&&<Buttons author={phrase.quote} text={phrase.author} check={this.randomIndex}/>
}
    </>
    )
}
}

export default ContentText;