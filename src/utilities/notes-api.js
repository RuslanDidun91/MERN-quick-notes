import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

//user stories
export function addNote(notes) {
  return sendRequest(`${BASE_URL}/new`, 'POST', notes);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function deleteNote(_id) {
  return sendRequest(`${BASE_URL}/${_id}`, 'DELETE');
}