import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleupClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
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
       }
       const[mystyle,setMystyle]=useState({
        color:'black',
        backgroundColor:'white'
       }
       )
       const[btntext,setBtntext]=useState('Enable dark mode');
      const togglestyle=()=>{
         if(mystyle.color==='black'){
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
            }
    const[text,setText]=useState('Enter Your text here');
 return (
    <>  <div style={mystyle}>
      <h1 className='my-2'>{props.heading}</h1>
      <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='light'?'dark':'light'}} id="mybox" rows="8"></textarea>
      </div>
           <button className="btn btn-light mx-2 my-2" onClick={handleupClick} >Convert to uppercase</button>
        <button className="btn btn-light mx-2 my-2" onClick={handlestClick} >Convert to string</button>
      <button className="btn btn-light mx-2 my-2"  onClick={handleloClick} >Convert to lowercase</button> 
    </div>
    <div className="container my-4 py-2" style={mystyle}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length}read time per minute</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
   <div className="btn btn-dark" onClick={togglestyle} style={mystyle}>{btntext}</div> 
    
    
    </>
  
 )
}

