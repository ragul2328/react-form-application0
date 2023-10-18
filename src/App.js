import React from 'react';
import './style.css';
import {useState} from 'react'

export default function App() {
    const[email,setemail]=useState("");
    const[isvalidemail,setisvalidemail]=useState(true);
  
    const[name,setname]=useState("");
    const[isvalidname,setisvalidname]=useState(true);

    const[password,setpassword]=useState('');
    const[isvalidpassword,setisvalidpassword]=useState(true);

const handlepasswordchange=(e)=>{
  const inputpassword=e.target.value;
  setisvalidpassword(inputpassword.length>8);
  setpassword(inputpassword)
}

const handlesubmit=(e)=>{
  e.preventDefault();
  const inputemail=e.target.value;
  const mailpattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  setisvalidemail(mailpattern.test(inputemail));
  const inputname=e.target.value;
  setisvalidname(inputname.length>=0);
  const inputpassword=e.target.value;
  setisvalidpassword(inputpassword.length>8);
  setpassword(inputpassword)
  isvalidemail&&isvalidname &&isvalidpassword?alert("Login successfully completed..."):alert("Login failed try again");
}    

const handlenamechange=(e)=>{
  const inputname=e.target.value;
  setisvalidname(inputname.length>=0)
  setname(inputname)

}
    
const handleemailchange=(e)=>{
 const inputemail=e.target.value;
 const mailpattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
 setisvalidemail(mailpattern.test(inputemail));
 setemail(inputemail)
}

  return (
    <div className="app">
      <h1>React form valitation</h1>
     <form onChange={handlesubmit}> 


      {/* Input email-group */}
    <div className="form-group">
     <lable htmlFor="email">G-mail</lable>
     <input className={isvalidemail?"valid":"invalid"} type="text " id="email" name="email" value={email} onChange={handleemailchange}></input>
    </div>


    {/* Error message  */}
    <div className="form-feedback">
      {!isvalidemail && (<span className="invalid-email">Enter valid G-mail</span>)}
    </div>


    {/* input name-group */}
    <div className="form-group">
      <lable htmlfor="name">Name</lable>
      <input type="text" className={isvalidname?"valid":"invalid"} id="name" name="name" value={name} onChange={handlenamechange}></input>
      </div>


      {/* Error message */}
      <div className="form-feedback">
        {!isvalidname &&(<span className="invalid-name">Enter valid name</span>)}
    </div>


    {/* input password group */}
    <div className="form-group">
      <lable htmlFor="password">Password</lable>
      <input type="password" className={isvalidpassword?"valid":"invalid"} name="password" value={password} onChange={handlepasswordchange}></input>
    </div>


    {/* Error message */}
    <div className="formfeedback">
      {!isvalidpassword &&(<span className="invalid_password">Enter valid password</span>)
      }
    </div>


    <button type="submit" className="button">Login</button>
    </form>
    </div>
  );
}
