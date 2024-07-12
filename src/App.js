import './App.css';
//import Modal from './components/Modal';
//import ReminderList from './components/ReminderList';
import { BrowserRouter, Route, NavLink, Routes,Navigate , Link} from 'react-router-dom'

import React, {useState} from 'react';

import "./App.css"

import LoginForm from './pages/LoginForm';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Article from './pages/Article'
import FormArticle from './pages/FormArticle'
import EditArticle from './pages/EditArticle'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (

    <div className="App">

      <div>
      {isLoggedIn ? (
        <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/new">New Article</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About /> }/>
          <Route path="/contact" element={<Contact /> }/>
          <Route path="/articles/:urlId" element={<Article/> }/>
          <Route path="/new" element={<FormArticle /> }/>
          <Route path="/edit/:id" element={<EditArticle />}/>
          <Route path="/*" element={<Navigate to="/"/> }/>
        </Routes>

      </BrowserRouter>
      ) : (
        <LoginForm onLogin={setIsLoggedIn} />
      )}

    </div>

      
    </div>
  );
}

export default App;
