import React, { useState } from 'react';
import {getDocs, collection, deleteDoc, doc, setDoc, addDoc, getDoc, updateDoc, onSnapshot} from 'firebase/firestore';
import { db } from '../firebase/config';

import "../App.css"

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const Validate = async (e) => {
            e.preventDefault();
            try {
            const querySnap = await getDocs(collection(db,"accounts"));
            querySnap.forEach((doc) => {
                const userData = doc.data();
                if (userData.username === username && userData.pass === password){
                    onLogin(true);
                } else {
                    alert('Invalid credentials');
                }
            });
        } catch (error){
            console.error("Error fetching user data:", error);
        }
    }
        Validate(e)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
