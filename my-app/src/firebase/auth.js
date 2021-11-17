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

export const getNoteById = async (id) => {
    const doc = await db.collection('Tasks').doc(id).get();
   // setValues({...doc,data()})
    //console.log(doc.data())
    const notePrint = doc.data()
    return notePrint
}

