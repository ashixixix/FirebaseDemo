import { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {db} from '../firebase/config'
import {getDocs, collection, deleteDoc, doc, setDoc, addDoc, getDoc, updateDoc, onSnapshot} from 'firebase/firestore';
// styles
import './create.css'

export default function Edit() {  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const { id } = useParams()
  console.log(id)

  const navigate = useNavigate()


  useEffect(() => {
    const fetchArticle = async () => {
      const ref = doc(db, 'articles', id)
      const docSnap = await getDoc(ref)
      if (docSnap.exists()) {
        const data = docSnap.data()
        setTitle(data.title)
        setAuthor(data.author)
        setDescription(data.description)
      }
    }
    fetchArticle()
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault()
    const article = { title, author, description }
    const ref = doc(db, 'articles', id)
    await updateDoc(ref, article)
    navigate('/')
  }


  return (
    <div className="create">
      <h2 className="page-title">EDIT ARTICLE:</h2>
      <form onSubmit={handleUpdate}>

        <label>
          <span>Title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            
          />
        </label>
        
        <label>
          <span>Author:</span>
          <input 
            type="text" 
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            
          />
        </label>

        <label>
          <span>Description:</span>
          <textarea 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            
          />
        </label>

        <button className="btn">Edit</button>
      </form>
    </div>
  )
}