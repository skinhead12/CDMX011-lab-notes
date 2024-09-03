import { db } from "./config";

// agregar datos a db
export const addOrEdit = async (values) =>{
   await db.collection("Tasks").doc().set(values);
}

//eliminar datos a db
export const onDeleteNote = async (id) =>{
    if (window.confirm('Are you sure ?'))
    await db.collection("Tasks").doc(id).delete();
    console.log('Note Deleted')
}

export const getNoteById = async (id, values ) => {
    const doc = await db.collection('Tasks').doc(id).get(values);
   // setValues({...doc,data()})
    //console.log(doc.data())
    const notePrint = doc.data()
    return notePrint
}

export const onUpdate = async (id, values) => {
    await db.collection("Tasks").doc(id).update(id, values);
} 

// Crear una funcion que espere un parametro de ID y ese ID lo vas a consultar en firebase y traeras los datos

//Crear una funcion handleEditNote va a esperar(id,nota)