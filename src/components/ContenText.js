import React, { Component } from 'react'
import Buttons from './Buttons'
import {FaQuoteLeft} from 'react-icons/fa'

class ContentText extends Component{
constructor(props){
    super(props);
    this.state={
        text:[ ],
        selectText:0,
        colorF:' '

    }
    this.randomIndex=this.randomIndex.bind(this)
    this.randomColor=this.randomColor.bind(this)
}

randomColor=()=>{
    var color=[
        '#16a085', '#27ae60', '#2c3e50', '#f39c12', 
        '#e74c3c', '#9b59b6', '#FB6964', '#342224', 
        "#472E32", "#BDBB99", "#77B1A9", "#73A857"
    ]
    let numCol=Math.floor(Math.random()*(color.length));
    //console.log(numCol)
    let coloSel=color[numCol];
    return coloSel
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
    let colorSel1=this.randomColor();
   this.setState({
       selectText:randomNum,
       colorF: colorSel1
   })
   
   
  // console.log(this.state.selectText)

}

render(){    
    let{text, selectText, colorF}=this.state;
    
   // console.log(selectText)
    const phrase=text[selectText]
    //console.log(phrase)
    //const phrase=phrases.author
    //console.log(phrases.quote)
   
    return(
    <>
      <div className="conteiner-fluid" id="quote-box">
     <div className=" d-flex align-items-center justify-content-center outs" style={{background:this.state.colorF}} >
     <div className="col-xs-6 p-5 rounded box">
    <div className="mb-4">
    {phrase&&<p id="text" className="d-flex flex-column" style={{color:this.state.colorF}}><FaQuoteLeft size={50}/>{phrase.quote}</p>}
    {phrase&&<cite className="d-block text-right" id="author" style={{color:this.state.colorF}} >-{phrase.author}</cite>}
    </div>
    {
    phrase&&<Buttons author={phrase.quote} text={phrase.author} check={this.randomIndex} colorBut={this.state.colorF}/>
}
</div>
    </div>
    </div>
    </>
    )
}
}

export default ContentText;