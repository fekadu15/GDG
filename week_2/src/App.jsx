import { useState } from "react";

   function CalcButton({label,variant = "normal" , onClick}) {

      const styles = {
        normal : {
          backgroundColor:"#e0e0e0",
          color:"#000",
          
        },
         operator : {
          backgroundColor:"#ff9800",
          color:"#fff",
        },
         equal : {
          backgroundColor:"#4caf50",
          color:"#fff",

        },
      }
      const baseStyle = {
        padding : "18px",
        fontSize:"18px",
        border:"none",
        borderRadius:"50%",
        cursor:"pointer"
      }
      return(
        <button
        style={{...baseStyle,...styles[variant]}}
        onClick={()=>onClick(label)}
        >
         {label}
         
        </button>
      )
    }

  export default function App(){
    
    const [result, setResult] = useState("");
    function handleClick(e) {
      if (e === "C") {
        setResult("");
      }
      else if (e ==="=") {
        try{
            setResult(eval(result))
        }
        catch{
          setResult("Error")
        }
      
      }
      else{
        setResult((prev)=>prev +e )
      }
    }
    
  return(
   <div style={{
   

   }}>

   <input   type="text" style={{
    width:"250px",
   backgroundColor:"lightgray",
   height:"40px",
   border:"3px solid gray",
   outline:"none",
   textAlign:"right",
   fontSize:"18px",
   
   }} 
   value={result}/>
    <div style={{width:"258px",height:"auto", 
      backgroundColor:"gray", 
      display:"grid",
      gridTemplateColumns:"repeat(4,1fr)",
      gap:"10px",
     
      }}>
      <CalcButton label = "7" onClick={handleClick}/> 
      <CalcButton label = "8" onClick={handleClick}/>  
      <CalcButton label = "9" onClick={handleClick}/>  
      <CalcButton label = "/" variant = "operator"onClick={handleClick}/>   
      
      <CalcButton label = "4" onClick={handleClick}/> 
      <CalcButton label = "5" onClick={handleClick}/>  
      <CalcButton label = "6" onClick={handleClick}/>  
      <CalcButton label = "*" variant = "operator"onClick={handleClick}/>

      <CalcButton label = "1" onClick={handleClick}/> 
      <CalcButton label = "2" onClick={handleClick}/>  
      <CalcButton label = "3" onClick={handleClick}/>  
      <CalcButton label = "-" variant = "operator"onClick={handleClick}/> 
       
       <CalcButton label = "C"  onClick={handleClick}/> 
      <CalcButton label = "0"   onClick={handleClick}/>  
      <CalcButton label = "="  variant = "equal"onClick={handleClick}/>  
      <CalcButton label = "+"  variant = "operator"onClick={handleClick}/>
        
    </div>
    </div>
  )
}
