// import logo from './logo.svg';
// import './App.css';
import About from './About';
import EddieForm from './EddieForm';
import './EddieForm.css'
import React, {useEffect, useState} from "react";



function App() {
  
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );



  // const [num,setNum]=useState(0);
  // useEffect(()=>{
  //   setNum(num+20)
  // },[])


  return(
    <div className='App'>


      {/* <p>{num}</p>
      <button onClick={()=>{setNum(num+1)}}>
        Click me
      </button> */}


      
      <EddieForm/>
      {/* <About email={"ncudramohamed@gmail.com"}/> */}
    </div>
  )
}

export default App;
