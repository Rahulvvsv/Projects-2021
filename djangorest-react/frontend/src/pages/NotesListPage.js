import React,{useState,useEffect} from 'react'
import ListItem  from '../components/ListItem';


const NotesListPage = () => {

    let [notes,setNotes] = useState([]);
    useEffect(()=>{

    getNotes();

    },[])
    let getNotes = async () => {
     let response= await fetch("/notes/")   
     let data= await response.json();
        setNotes(data)
        console.log(data)
        console.log(notes)
    }
    return (
        <div>
            <div className="notes-list">
                
                {notes.map((note,index)  => (
                    <ListItem key={index} note={note} />
                ))}
                </div> 
        </div>
    )
}

export default NotesListPage
