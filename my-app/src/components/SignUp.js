import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth, google } from '../firebase/config';
import '../index.css';

const SignUp = () => {
    const [email, setEmail] = useState ('')
    const [pass, setPass] = useState('')
    const [passCon, setPassCon] = useState('')
    const history = useHistory();

    const registerUser = (e) =>{
        e.preventDefault()
        if (pass === passCon){
            auth.createUserWithEmailAndPassword(email,pass)
            .then((res) => {
                history.push('/wallnotes')
                alert('Usuario Registrado')
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
        })
            .catch(err => {
                console.log(err)
            })
    }

return(
    <div className="signUpContainer">
        <form  onSubmit={registerUser} className="formSignup">
            <div className='boxcontainer'>
            <h3>SignUp</h3>
        <input  onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="emailSignUp"/><br/>
        <img  className="boxEmail" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/icons8-correo-50.png?alt=media&token=a9f80dbb-197b-462a-b7be-b5a5c5ce075d"/>
        <input  onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Password" className="passSign"/><br/>
        <img  className="passLock" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/icons8-bloquear-50.png?alt=media&token=540cb970-455a-4397-9aac-fa8efcf6c1d7"/>
        <input  onChange={(e) => {setPassCon(e.target.value)}} type="password" placeholder="Confirm Password" /><br/>
        <button className="btnSignUp" >Submit</button>
            </div>
            <div className="lineaContainer">
                <img className="linea" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/linea.png?alt=media&token=e83a0453-2ccf-490b-8994-c039436bc50b"/>
            </div>
            <div>
            <p>OR</p>
        <button className="btnGoogle" onClick={registerGoogle}>Continue with Google</button>
        <p className="text-link">Are you already registred? <Link to="/">Login</Link></p>
            </div>
        </form>
        <div className="notasContainer"></div>
    </div>
);
}
export default SignUp