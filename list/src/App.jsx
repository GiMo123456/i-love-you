 
 /*Display a js object */ 
 import * as React from "react"; 
 const welcome= { 
  name :" Mouna",  
  age : 20,

 }; 
 function App(){  
  return( 
    <h1>Hello, I'm {welcome.name}, I'm {welcome.age}</h1>
  )

 } 
 export default App;
 