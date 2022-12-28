import * as notesAPI from '../../utilities/notes-api';


export default function NoteComponent({ notes, user, setNotes }) {
  const handleClick = async () => {
   const  allNotes = await notesAPI.deleteNote(notes._id);
    setNotes(allNotes)
  }

  return (
    <div>
      <div>user: {user.name}</div>
      <div>posted: {new Date(notes.updatedAt).toLocaleDateString()}</div>
      <div>text: <strong>{notes.text}</strong> <button onClick={handleClick}>x</button></div>
      <hr />
    </div>
  )
}