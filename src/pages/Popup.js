import { Link } from 'react-router-dom'
import {getDocs, collection, deleteDoc, doc, setDoc, onSnapshot} from 'firebase/firestore';
import {db} from '../firebase/config'
import { useEffect,useState } from 'react';
import DeleteIcon from '../assets/delete.svg'
import EditIcon from '../assets/edit.svg'
import './App.css';

function popupForm(){
    const [inputFields, setInputFields] = useState([
        {author: '', description: '', title:""}
    ])
    return (
        <div className="App">
          <form>
            {inputFields.map((input, index) => {
              return (
                <div key={index}>
                  <input
                    name='author'
                    placeholder='Author'
                    value={input.author}
                  />
                  <input
                    name='description'
                    placeholder='Description'
                    value={input.description}
                  />
                  <input
                    name='title'
                    placeholder='Title'
                    value={input.title}
                    />
                </div>
              )
            })}
          </form>
        </div>
      );
}

export default popupForm;