import React, {useState} from 'react';

import { addOrEdit } from '../firebase/auth';
import './Modal.css';

function Modal({ showModal, setShowModal, note }) {


    const initialStateValues = {
        title: "",
        description: "",
        currDate: new Date().toLocaleDateString(),
      };
    
      const [values, setValues] = useState(initialStateValues);

        const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrEdit(values);
        console.log('your note has been save succesfully')
        setValues({})
        setShowModal((prev) => !prev)
        };
      
    return showModal ? (
            <article className="modal is-open" >
            <div className="modal-container">
            <button className="modal-close" onClick={() => setShowModal((prev) => !prev)}> X </button>
            <h3>Write your Note</h3>
            <input onChange={handleInputChange} value={values.title} name="title" type="text" placeholder="Title" className="TitleNote"/>
            <textarea onChange={handleInputChange} value={values.description} name="description" placeholder="Description" className="BodyNote" rows="5"/>
            <div className="ContainerBtn" >
                <button className="btnSave" onClick={handleSubmit}>{ note ? 'update' : 'Save'}  </button>
            </div>
            </div>
        </article>    
    ) : <h4>log Out</h4>;
};

export default Modal
