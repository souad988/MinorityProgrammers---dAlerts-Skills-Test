
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification } from 'firebase/auth';
import { collection,doc,setDoc } from '@firebase/firestore';
import {db,myauth } from "./firebase.js";
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';
import axios from 'axios'
function Login() {
    
    const [showing, setShowing] = useState(1);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    var user='' ;
    var errorCode =0;  
    var errorMessage='' ;
function register(event){
    event.preventDefault()
       createUserWithEmailAndPassword(myauth,email,password)
        .then((userCredential) => {
            setShowing(1)
            console.log(userCredential.user.uid)
            sendEmailVerification(userCredential.user,{url:'http://localhost:3000'}).then(()=>
            {console.log('verification email sent')}).catch((error)=>
            {console.log('from send email',error.message)})
            /*myauth.signOut();
            alert("verification Email sent to your account ");*/
            const users=collection(db,'users');
            const user_doc = doc(users,userCredential.user.uid);
            setDoc(user_doc,{
            'email': userCredential.user.email,
            'password': password,
            'uid':userCredential.user.uid
            });
        })
        .catch((error) => {
            alert(error.message)
            // ..
        })
};
function login(event){
    event.preventDefault()
        signInWithEmailAndPassword(myauth, email,password)
        .then((userCredential) => {
            
            user = userCredential.user;
            console.log(user.email)
            // ...
            history.push('/');
        })
        .catch((error) => {
              alert(error.message)
        })
};
    function show_signin(){
        setShowing(1);
    }
    function show_signup(){
        setShowing(2);
    }
    return (
        
            
            <div className="form__container">
                <div className="login">
                    <div className="login_buttons">   
                        <button onClick={show_signin} className={`onglet ${showing===1?'active':''}`} > SignIn</button>
                        <button onClick={show_signup} className={`onglet ${showing===2?'active':''}`}>SignUp</button>   
                    </div> 
                    {showing===1? 
                     
                    <div className="login__form" >
                        {console.log('from login form:',showing)}
                        <h5>do you have an account?</h5>
                        <h1>Sign-in </h1>
                        <form >
                        
                            <div>
                            <h5><strong>Email</strong></h5>
                            <input value={email} type="email" onChange={event => setEmail(event.target.value)}></input>
                            </div>
                            <div><h5><strong>Password</strong></h5>
                            <input value={password} type="password" onChange={event => setPassword(event.target.value)}></input>
                            </div><button type="submit" onClick={(e)=>login(e)}> Connexion </button>

                        </form>
                        
                    </div>:
                <div className="signup__form" >
                     {console.log('from signup form:',showing)}
                    <h5>New user?</h5>
                    <h1> Sign-up </h1>
                    <form>
                        <div>
                            <h5><strong>Email</strong></h5>
                            <input value={email} type="email" onChange={event => setEmail(event.target.value)}></input>
                        </div>
                        <div>
                            <h5><strong>Password</strong></h5>
                            <input value={password} type="password" onChange={event => setPassword(event.target.value)}></input>
                        </div>
                        <div>
                            <h5><strong>Confirm Password</strong></h5>
                            <input value={password1} type="password" onChange={event => setPassword1(event.target.value)}></input>
                        </div>
                        <button type="submit" onClick={(e)=>register(e)} > Register </button>
                    </form>
                </div>}
            </div>
        </div>
    )
}

export default Login
