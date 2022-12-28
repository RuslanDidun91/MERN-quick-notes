 import { useState } from "react";
import * as notesAPI from '../../utilities/notes-api';

export default function NewNote({}) {


  return (
    <div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <textarea name="text"
              placeholder="write your note"
              rows="7"
              value={noteData.name}
              onChange={handleChange}></textarea>
            <button type="submit">add note</button>
          </form>
        </div>
    </div>
  );
}