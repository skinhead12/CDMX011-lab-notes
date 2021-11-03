import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import { auth, db } from '../firebase/config';
import { onDeleteNote } from '../firebase/auth';
import { Link } from 'react-router-dom';
import '../index.css';

const WallNotes = () => {

    const [notes, setNotes] = useState([]);

    const getNotes =  () => {
    db.collection("Tasks").onSnapshot((querySnapshot)=>{
        const docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({...doc.data(), id:doc.id});
    });
    setNotes(docs);
    });
};

    useEffect (() => {
        getNotes();

    }, []);

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
         <nav className="navBar">
            <Link to="/modal">
             <button className="createha" >Create Note</button>
             </Link>
             <button className="LogOut" onClick={LogOutProfile}>Log Out</button>
         </nav>
     </header><div className="signUpContainer">
             <br /><br /><br /><br />
             <p>This is the wall</p> 
             <div className="principal">
                {notes.map(notes => (
                   <div className="card">
                       <div className="card-body">
                           <h4>{notes.title}</h4>
                           <p>{notes.description}</p>
                           <div className="container-btns">
                           <button onClick={() => onDeleteNote(notes.id)}>Delete</button>
                           <button>Edit</button>
                           </div>
                       </div>
                   </div>

                ))}
             </div>      
         </div></>
);
}

export default WallNotes