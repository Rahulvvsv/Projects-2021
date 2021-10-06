import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
//import {ReactComponent as Arrowleft} from '../assets/arrow-left.svg'
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
        <div className="note">
            <div className="note-header">
                <Link  to ="/">
                <h2>go back</h2>
                </Link>
            </div>
        <textarea defaultValue={note? note.body:null}></textarea>
        </div>
    )
}

export default NotePage;