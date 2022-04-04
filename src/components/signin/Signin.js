import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import { auth } from "../../firebase";
import "./signin.css";

const Signin = () => {
    const emaiRef=useRef(null);
    const passwordRef=useRef(null);
  const history = useHistory();

  const login=(e)=>{
    history.push('/')
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emaiRef.current.value,
      passwordRef.current.value 
    ).then((authUser)=>{
      console.log(authUser);
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div >
      <img
        onClick={() => {
          history.push("/");
        }}
        className="logo_img"
        src="https://logowik.com/content/uploads/images/linkedin-new4645.jpg"
        alt="logo"
      />
    
      <h2 className="signin_head">SignIn</h2>
    <div className="email">
        <form>
            <label className="etext" htmlFor="email">Email</label><br/>
            <input type='email' ref={emaiRef}></input><br/>
            <label className="etext" htmlFor="password">Password</label><br/>
            <input className="etext" ref={passwordRef} type='password'></input><br/>
            <p>Forgot Password?</p>
            <button className="btn-primary" onClick={login} type='submit'>Signin</button>
            <p>New To LinkedIn?
              <span className="join_now" onClick={()=>history.push('/join')}>Join Now</span> </p>
        </form>
    </div>
         
    </div>
  );
};

export default Signin;
