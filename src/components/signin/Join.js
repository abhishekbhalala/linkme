import React, { useRef } from 'react'
import './Join.css'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase';

const Join = () => {
const emailRef=useRef(null);
  const passwordRef=useRef(null);

    const history=useHistory()
const signup=(e)=>{
  e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
         <img
             className="logo_image"
        src="https://logowik.com/content/uploads/images/linkedin-new4645.jpg"
        alt="logo"
      />
      <h3 className='life'>Make the most of your professional life</h3>
  
    <div className="email">
        <form>
            <label className="etext" htmlFor="email">Email</label><br/>
            <input type='email' ref={emailRef}></input><br/>
            <label htmlFor="password">Password</label><br/>
            <input className='joinnow' ref={passwordRef} type='password'></input><br/>
            <p className='text'>By clicking Agree & Join, you agree to the LinkedIn User<br/> Agreement, Privacy Policy, and Cookie Policy.</p>
            <button className='joinnow_button' onClick={signup}>Join Now</button><br/>
                <span className='already'>Already on LinkedIn?</span>
                <span className='signin' onClick={()=>history.push('/signin')}>SignIn</span>
        </form>
    </div>
    </div>
  )
}

export default Join