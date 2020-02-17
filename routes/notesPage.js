const {Router} = require('express');
const router = Router();
const Note = require('../models/note');
const Subtask = require('../models/subtask');

router.get('/', async (req, res) => {
    try {
        const notes = await Note.findAll({include: [Subtask]});
        res.render('notesPage', {title : 'NotesPage', isNotes: true, notes});
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;