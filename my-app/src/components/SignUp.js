/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { auth, google } from '../firebase/config';
import '../index.css';

const SignUp = () => {
    const[email, setEmail] = useState ('')
    const [pass, setPass] = useState('')
    const [passCon, setPassCon] = useState('')
    const history = useHistory();

    const registerUser = (e) =>{
        e.preventDefault()
        if (pass === passCon){
            auth.createUserWithEmailAndPassword(email,pass)
            .then((res) => {
                history.push('/wallnotes')
                alert('Usuario Registrado' + email)
                
            })
            .catch((err) => console.log(err))      
            }  else {
            alert('The passwords must coincide');
        }
    }


    const registerGoogle =(e) => {
        auth.signInWithPopup(google)
        .then(respuesta => {
            history.push('/wallnotes')
            console.log('Welcome ' + email)
           
        })
            .catch(err => {
                console.log(err)
            })
    }

return(
    <div className="signUpContainer">
         <header className="logo">
                <img className="logoNotes" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/logoNotes.png?alt=media&token=2eeeb204-deca-43b6-8072-9613445159dd"/>
            </header>
        <form  onSubmit={registerUser} className="formSignup">
            <div className='boxcontainer'>
            <h3>SignUp</h3>
        <input  onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="emailInput"/><br/>
        <img  className="boxEmail" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/icons8-correo-50.png?alt=media&token=a9f80dbb-197b-462a-b7be-b5a5c5ce075d"/>
        <input  onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Password" className="passInput"/><br/>
        <img  className="passLock" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/icons8-bloquear-50.png?alt=media&token=540cb970-455a-4397-9aac-fa8efcf6c1d7"/>
        <input  onChange={(e) => {setPassCon(e.target.value)}} type="password" placeholder="Confirm Password" className="passInput"/><br/>
        <button className="btnSignUp" >Submit</button>
            </div>
            <div className="lineaContainer">
                <img className="linea" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/linea.png?alt=media&token=e83a0453-2ccf-490b-8994-c039436bc50b"/>
            </div>
            <div>
                <h3>Quicks notes on the go!</h3>
            <p>OR</p>
        <button className="btnGoogle" onClick={registerGoogle}>Continue with Google</button>
        <p className="text-link">Already have an account? <Link to="/">Login</Link></p>
            </div>
        </form>
        <div className="notasContainer"></div>
    </div>
);
}
export default SignUp