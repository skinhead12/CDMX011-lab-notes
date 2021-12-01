import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import {Link} from 'react-router-dom';

import { auth, db } from '../firebase/config';
import { onDeleteNote, getNoteById } from '../firebase/auth';
import Modal from './Modal';
import '../index.css';

const WallNotes = () => {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setNote('')
    setShowModal((prev) => !prev);
    };

    const [user, setUser] = useState({});
    useEffect(() => {
        auth.onAuthStateChanged(user => {
        if(user) {
          setUser({email: user.email})
        } else {
          setUser({null:''})
          console.log('user sign out')
        }
    })
}, [])

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

    const [note, setNote] = useState("");
    
    const handleEdit = (id) => {
        const editNote =  getNoteById (id)
        .then ((res) => {
        setShowModal((prev) => !prev)
        setNote(res)    
        })
    } 

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
        <div className="wallContainer">
        <header className="wallheader">
         <nav className="navBar">
         <p className="userName">Welcome {user.email} </p> 
            <div className="btns">
               <img className="logoWall" src="https://firebasestorage.googleapis.com/v0/b/labnotes-a892d.appspot.com/o/logoNotes2.0.png?alt=media&token=a4f03ae4-18e6-4e2a-a0ec-f91ba0077fb8"/>     
            <button className="createNote" onClick={openModal} >Create Note</button>             
             <button className="LogOut" onClick={LogOutProfile}></button>     
            </div>
         </nav>
        </header>
        <Modal showModal={showModal} setShowModal={setShowModal} note={note} /> 
             <div className="principal">
                {notes.map(notes => (
                   <div className="card">
                       <div className="card-body">
                          {/*  <p>{new Date().lastModified}</p>  */}
                           <h4>{notes.title}</h4>
                           <p>{notes.description}</p>
                           <div className="container-btns">
                           <button  className="btnDelete" onClick={() => onDeleteNote(notes.id)}></button>
                           {/* <Link to= {`edit/${notes.id} `}>
                           <button  className="btnEdit" ></button></Link> */}
                           <button className="btnEdit" onClick={()=> handleEdit(notes.id)}></button>
                           </div>
                       </div>
                   </div>
                ))} : 
             </div>      
         </div>
);
}

export default WallNotes