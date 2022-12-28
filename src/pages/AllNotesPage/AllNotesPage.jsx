import  NoteComponent from '../../components/Note/NoteComponent.jsx';

export default function AllNotes({notes, user, setNotes}) {
  return (
    <>
      <h1>Notes</h1>
      {notes.length === 0 ?
        <span>no notes yet</span>
        :
        <div>
          {notes.map((note, i) => (
            <NoteComponent notes={note} key={i} user={user} setNotes={setNotes}/>
          ))}
        </div>
      }
    </>
  );
}