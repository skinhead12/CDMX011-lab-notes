import { useState } from "react";
import { useParams } from "react-router";

const Edit = () => { // aqui va una prop
    const {idDocument} = useParams()


    // primera parte del 1 al 5
    //1 crearas estado o estados para guardar los valores  que traeras en el paso 2

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


// 2 vas a usar un useEffect para ejecutar la funcion de firebase que consulta un id y va a mandarle idDocument
// 3 una vez que tengas los valores guardas la nota en el estado que creaste en el paso 1

// ------- segunda parte del 6 al 8

//6 vas a destructurar una prop que sera una funcion llamada handleEditNote 


    

    console.log(idDocument)
    return ( 
        // 4 crear un form 
        //5 vas a igualar los valores del form con los valores del estado que creaste en el paso 1
        //7 dentro de la etiqueta <form> vas a usar el onSubmit y vas a prevenir la propagacion cone.preventDefault()
        //8 despues vas a usar la funcion handleEsitNote para mandar el id del documentos y el estado de la nota
        <div>
            <form>
            <input  name="title" placeholder="Title" className="TitleNote"/>
            <textarea  name="description" placeholder="Description" className="BodyNote" rows="5"/>
            <div className="ContainerBtn" >
            <button className="btnUpdate" >Update</button>
                </div>
            </form>
            </div>
        
     );
}
 
export default Edit;