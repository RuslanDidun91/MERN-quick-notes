const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const isUser = require('../../config/ensureLoggedIn')

// All paths start with '/notes'

//GET/
router.get('/', notesCtrl.index)
//POST/notes
router.post('/new',isUser, notesCtrl.create);

module.exports = router;