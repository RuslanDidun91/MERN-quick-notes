import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

//user stories
export async function addNote(notes) {
  return await sendRequest(`${BASE_URL}/new`, 'POST', notes);
}

export async function getAll() {
  return await sendRequest(BASE_URL);
}