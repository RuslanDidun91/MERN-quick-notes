const Note = require('../../models/notes');

module.exports = {
  create,
  index
}

async function index(req, res) {
  const notes = await Note.find({});
  res.status(200).json(notes)
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
}