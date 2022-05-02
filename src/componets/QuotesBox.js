import React, {useState} from 'react'
import Labels from './Labels.json'





 const Colors =[ 'green', 'yellow', 'lightblue', 'lightgreen', 'lightcoral']

 let NumberRandom =Math.floor(Math.random()*Labels.length)
 

const Quotes = () => {
    const [index ,setindex]= useState(NumberRandom)
    

    const ChangesQuotes = () => {
        let NumberRandom =Math.floor(Math.random()*Labels.length)
  
        setindex(NumberRandom)
    

    }
        
     
    let RandomColor = Math.floor(Math.random()*Colors.length)
    document.body.style = `background: ${Colors[RandomColor]}`
    
    
    

    return (
       
       <div className="Quotes" style={{color: Colors[RandomColor]}} >
            <i class="fa-solid fa-quote-left"></i>
           <h1>{Labels[index].quote}</h1>  
           <div><h1>{Labels[index].author}</h1></div> 
           
           <div  ><button onClick={ChangesQuotes} style={{color: Colors[RandomColor]}} > <i class="fa-solid fa-circle-play"></i> </button> </div>
          

        

        </div>
    );
};

export default Quotes;