import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleupClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert("Converted to upper case","success")
    }
    const handleonChange=(event)=>{
        setText(event.target.value)
    }
    const handlestClick=()=>{
     let newText=text.toString();
     setText(newText)
    }
    const handleloClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showalert("Converted to lower case","success")
       }
      /* const[mystyle,setMystyle]=useState({
        color:'black',
        backgroundColor:'white'
       }
       )
       const[btntext,setBtntext]=useState('Enable dark mode');
      const togglestyle=()=>{
         if(mystyle.color==='#042743'){
            setMystyle({
               color:'white',
               backgroundColor:'black' 
            })
            setBtntext('Enable light mode')
         }
         else{
            setMystyle({
                color:'black',
                backgroundColor:'white'   
            })
            setBtntext('Enable dark mode')
         }
            }*/
    const[text,setText]=useState('Enter Your text here');
 return (
    <>  <div style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1 className='my-2'>{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
      </div>
           <button className="btn btn-light mx-2 my-2" onClick={handleupClick} >Convert to uppercase</button>
        <button className="btn btn-light mx-2 my-2" onClick={handlestClick} >Convert to string</button>
      <button className="btn btn-light mx-2 my-2"  onClick={handleloClick} >Convert to lowercase</button> 
    </div>
    <div className="container my-4 py-2"style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length}read time per minute</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
{/*     
     <div className="btn btn-dark" onClick={togglestyle} style={mystyle}>{btntext}</div>  */}
    
    
    </>
  
 )
}

