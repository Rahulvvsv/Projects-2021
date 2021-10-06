import React,{useState,useEffect} from 'react'
//import { Link } from 'react-router-dom'
//import {ReactComponent as Arrowleft} from '../assets/arrow-left.svg'
const NotePage = ({match,history}) => {
    let [note,setNote] = useState(null)

    let noteId = match.params.id
    useEffect(()=>{
        getNote();
    },[noteId])


    let updateNote =  async () =>  {
        fetch(`/notes/${noteId}/update`,{
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(note)
        }
        )
    }
    let getNote = async () => {
     let response= await fetch(`/notes/${noteId}`)   
     let data= await response.json();
        setNote(data)
    }

    let deleteNote = async () =>  {
        fetch(`/notes/${noteId}/delete`,{
            method:"DELETE",
            'headers':{
                'Content-Type':'application/json'
            }

        })
        history.push('/')
    }

    let handleSubmit = () => {
        updateNote();
        history.push('/')
    }
    return (
        <div className="note">
            <div className="note-header">
                <h2 onClick={handleSubmit}>go back</h2>
                <button onClick={deleteNote}>Delete</button>
            </div>
        <textarea onChange={(event)=>{setNote({...note,'body':event.target.value})}} defaultValue={note? note.body:null}></textarea>
        </div>
    )
}

export default NotePage;