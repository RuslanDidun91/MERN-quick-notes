import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNotePage from '../NewNotePage/NewNotePage';
import AllNotesPage from '../AllNotesPage/AllNotesPage';
import NavBar from '../../components/NavBar/NavBar';
import { useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api'
import { Navigate } from "react-router-dom";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getNotes() {
      const notes = await notesAPI.getAll();
      setNotes(notes);
    }
    getNotes();
  }, [])

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/notes/new" element={<NewNotePage setNotes={setNotes} notes={notes} />} />
            <Route path="/notes" element={<AllNotesPage notes={notes} user={user} setNotes={setNotes}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}