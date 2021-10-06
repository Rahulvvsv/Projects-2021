import React from 'react'
import {Link} from 'react-router-dom'
const AddButton = () => {
    return (
        <Link to ="/note/new" className="floating-button">
           <h2>Add Note</h2> 
        </Link>
    )
}

export default AddButton
