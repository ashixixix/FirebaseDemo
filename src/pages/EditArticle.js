import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {db} from '../firebase/config'
import {getDocs, collection, deleteDoc, doc, setDoc, addDoc, onSnapshot} from 'firebase/firestore';
// styles
import './create.css'

export default function Edit() {  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault()   
    const article = {title,author,description};
    const ref = collection(db, 'articles')
    await addDoc(ref,article)

    // setTitle("");
    // setAuthor("");
    // setDescription("");

    navigate('/')
  }

  const handleUpdate = async (id) => {
    const ref = doc(db, 'articles', id)
    await setDoc(doc(db, 'articles', id), {
      author: "Los Angeles",
      description: "california",
      title: "USA"
    });
    
  }

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        
        <label>
          <span>Author:</span>
          <input 
            type="text" 
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </label>

        <label>
          <span>Description:</span>
          <textarea 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}