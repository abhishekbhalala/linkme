
import { Switch } from 'react-router-dom';

import { Route } from 'react-router-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Findperson from './components/Findperson';
import Home from './components/Home';
import Jobpage from './components/job/Jobpage';
import Learning from './components/Learning';

import Signin from './components/signin/Signin'
import Join from './components/signin/Join';
import Login from './components/signin/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useEffect } from 'react';
import Logout from './components/signin/Logout';


function App() {
  const user=useSelector(selectUser)

  const dispatch=useDispatch();

  useEffect(()=>{
    const unsub=auth.onAuthStateChanged((userAuth)=>{
         if(userAuth){
           //login
           dispatch(login({
             uid:userAuth.uid,
             email:userAuth.email
           }))
         }else{
           //logout
           dispatch(logout())
   
         }
       }) 
       return unsub;
     },[dispatch])
  return (
    <div >
      <Router>
        
         
       <Switch>
          <Route exact path='/'> 
          <Login/>
          </Route>
        <Route path='/home'>
            <Home/>
          </Route>
          <Route exact path='/signin'>
            <Signin/>
          </Route>
          <Route exact path='/join'>
          <Join/>
          </Route>
          <Route exact path='/job'>
      <Jobpage/>
          </Route>
          <Route path='/person'>
            <Findperson/>
          </Route>
          <Route path='/learning'>
            <Learning/>
          </Route>
          <Route path='/logout'>
            <Logout/>
          </Route>
        </Switch>
      </Router>   
    </div>
  );
}

export default App;
