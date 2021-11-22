import React, {useState} from 'react';

import { addOrEdit, onUpdate } from '../firebase/auth';
import './Modal.css';

function Modal({ showModal, setShowModal, note }) {
console.log(note.title)

    const initialStateValues = {
        title: "",
        description: "",
      };
    
      const [values, setValues] = useState(initialStateValues);

        const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

      const handleUpdate = (e) => {
          e.preventDefault();
          onUpdate(values)
          console.log('your note has been update succesfully')
          setValues({...initialStateValues})
          setShowModal((prev) => !prev)
      } 

      const handleSubmit = (e) => {
        e.preventDefault();
        addOrEdit(values);
        console.log('your note has been save succesfully')
        setValues({...initialStateValues})
        setShowModal((prev) => !prev)
        };
      
    return showModal ? (
            <article className="modal is-open" >
            <div className="modal-container">
                <header className="headerModal">
                 <button className="modal-close" onClick={() => setShowModal((prev) => !prev)}> X </button>
                 <h3>Write your Note</h3>        
                </header>
            <input onChange={handleInputChange} value={values.title || note.title }  name="title" placeholder="Title" className="TitleNote"/>
            <textarea onChange={handleInputChange} value={note.description ? note.description : values.description} name="description" placeholder="Description" className="BodyNote" rows="5"/>
            <div className="ContainerBtn" >
                <button className="btnSave" onClick={handleSubmit}>Save</button>
                <button className="btnUpdate" onClick={handleUpdate}>Update</button>
            </div>
            </div>
        </article>    
    ) : <p>Notes </p>;
};

export default Modal
