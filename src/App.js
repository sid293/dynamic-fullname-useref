// import logo from './logo.svg';
import {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  let [fullName, setfullName] = useState("");
  let firstName = useRef();
  let lastName = useRef();

  let buildFullName = ()=>{
    // let firstName = document.getElementById("first").value;
    // let lastName = document.getElementById("last").value;
    let fullname = "Full Name: "+firstName.current.value+" "+lastName.current.value;
    setfullName(fullname);
  };


  return (
    <div className="App">
        <h1>Full Name Display</h1>
        <p>First Name :<input id="first" ref={firstName} type="text"/></p>
        <p>Last Name :<input id="last" ref={lastName} type="text"/></p>
        {/* <input type="submit"/> */}
        <button onClick={buildFullName} >Submit</button>
      {fullName !== "" && 
        (<div>
          <p>{fullName}</p>
        </div>)
      }
    </div>
  );
}

export default App;
