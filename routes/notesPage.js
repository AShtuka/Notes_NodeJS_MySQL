const {Router} = require('express');
const router = Router();
const Note = require('../models/note');
const Subtask = require('../models/subtask');
const Category = require('../models/category');

router.get('/', async (req, res) => {
    try {
        const notes = await Note.findAll({include: [Subtask]});
        const categories = await Category.findAll();
        res.render('notesPage', {title : 'NotesPage', isNotes: true, notes, categories});
    } catch (e) {
        console.log(e)
    }
});

module.exports = router;