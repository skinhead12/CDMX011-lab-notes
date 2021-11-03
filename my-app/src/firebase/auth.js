import { db } from "./config";


export const addOrEdit = async (values) =>{
   await db.collection("Tasks").doc().set(values);
}

export const onDeleteNote = async (id) =>{
    if (window.confirm('Are you sure ?'))
    await db.collection("Tasks").doc(id).delete();
    console.log('Note Deleted')
}
