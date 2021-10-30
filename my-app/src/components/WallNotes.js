import React from 'react'
import { useHistory } from 'react-router';
import { auth } from '../firebase/config';

const WallNotes = () => {

    const history = useHistory();

    const LogOutProfile = (e) =>{
        auth.signOut()
        .then(ele =>{
          history.push('/')  
        })
        .catch(err => {
            console.log(err)
            console.log('session ended successfully')
        })
    }
 return(
            <><header>
         <nav>
             <button>Create Note</button>
         </nav>
     </header>
     <div className="signUpContainer">
         <br/><br/><br/><br/>
             <p>This is the wall</p>
             <button onClick={LogOutProfile}>Log Out</button>
         </div></>
);
}

export default WallNotes