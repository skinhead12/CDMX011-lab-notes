import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth, google } from '../firebase/config';
import '../index.css';

const Login = () => {
     const [email, setEmail] = useState ('')
    const [pass, setPass] = useState('')
    const history = useHistory();

    const loginUser = (e) =>{
        e.preventDefault()
        if (email === ('') || pass === ('')){
            alert('test')
        } else {
        auth.signInWithEmailAndPassword(email,pass)
        //auth.setPersistence(userPersistence)
        .then((res) => {
            history.push('/wallnotes')
            alert('Welcome')
        })
        .catch((err) => 
        console.log(err))      
        }
  
    }

    const registerGoogle =(e) => {
        auth.signInWithPopup(google)
        .then(respuesta => {
            history.push('/wallnotes')
            setEmail(respuesta.email);
        })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="loginContainer">
            <form className="formLogin">
                <div>
                <h3>Login</h3>
            <input  onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Email" className="emailInput"/><br/>
           <img  className="boxEmail" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/icons8-correo-50.png?alt=media&token=a9f80dbb-197b-462a-b7be-b5a5c5ce075d"/>
            <input   onChange={(e) => {setPass(e.target.value)}} type="password" placeholder="Password" className="passInput"/><br/>
            <img  className="passLock" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/icons8-bloquear-50.png?alt=media&token=540cb970-455a-4397-9aac-fa8efcf6c1d7"/>
            <button className="btnLogin" onClick={loginUser}>Submit</button>
                </div>
                <div className="lineaContainer">
                <img className="linea" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/linea.png?alt=media&token=e83a0453-2ccf-490b-8994-c039436bc50b"/>
            </div>
                <div>
                <p>OR</p>
            <button className="btnGoogle"  onClick={registerGoogle}>Continue with Google</button>
            <p className="text-link">Not registered yet? <Link to="/signup">Sign Up</Link></p>
                </div>
            </form>
            <div className="notasContainer"></div>
        </div>
    );
}


export default Login
