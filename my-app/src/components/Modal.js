import React, {useState} from 'react';
import { addOrEdit } from '../firebase/auth';
import './Modal.css';
 
const Modal = () => {

    const initialStateValues = {
        title: "",
        description: "",
      };
    
      const [values, setValues] = useState(initialStateValues);
    
        const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrEdit(values);
        console.log(values)
        console.log('your note has been save succesfully')
        };

    return(
            <article className="modal is-open" >
            <div className="modal-container">
            <button className="modal-close" >X</button>
            <h3>Write your Note</h3>
            <input onChange={handleInputChange} value={values.title} name="title" type="text" placeholder="Title" className="TitleNote"/>
            <textarea onChange={handleInputChange} value={values.description} name="description" placeholder="Description" className="BodyNote"/>
            <div className="ContainerBtn">
                <button className="btnSave" onClick={handleSubmit}>Save</button>
            </div>
            </div>
        </article>    
    )
}

export default Modal
