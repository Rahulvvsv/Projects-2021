import React,{useState,useEffect} from 'react'

const NotePage = ({match}) => {
    let [note,setNote] = useState(null)

    let noteId = match.params.id
    useEffect(()=>{
        getNote();
    },[noteId])

    let getNote = async () => {
     let response= await fetch(`/notes/${noteId}`)   
     let data= await response.json();
        setNote(data)
    }
    return (
        <div>
        <p>{note? note.body:null}</p>
        </div>
    )
}

export default NotePage;