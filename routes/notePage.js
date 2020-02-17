const {Router} = require('express');
const router = Router();
const Note = require('../models/note');
const Subtask = require('../models/subtask');

router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findByPk(+req.params.id,{include: [Subtask]});
        res.render('notePage', {title : 'notePage', isNote: true, note});
    } catch (e) {
        console.log(e)
    }
});

router.get('/', (req, res) => {
    res.render('notePage', {title : 'notePage', isNote: true});
});

router.post('/', async (req, res) => {
    try {
        const subtasks = req.body.data.subtasks.map(item => ({title: item.subtask, isDone: item.isChecked}));
        const note = await Note.create({
            title: req.body.data.noteTitle,
            subtasks: subtasks
        }, {
            include: [Subtask]
        });
        res.status(201).send();
    } catch (e) {
       console.log(e);
       res.status(500).json({
           massage: 'Server error'
       });
    }
});

router.put('/update', async (req, res) => {
    try {
        let note = await Note.findByPk(+req.body.data.noteId,{include: [Subtask]});
        // note = JSON.stringify(note);
        note.title = req.body.data.noteTitle;
        console.log(JSON.stringify(note.subtasks) + '-------------------------------------');
        note.subtasks = JSON.parse(req.body.data.subtasks);

        await note.save({include: [Subtask]});
        console.log(req.body.data)
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).json({
            massage: 'Server error'
        })
    }
});

router.delete('/:id',async (req, res) => {
    try {
        const note = await Note.findByPk(+req.params.id);
        await note.destroy({include: [Subtask]});
        res.status(204).send();
    } catch (e) {
        console.log(e);
        res.status(500).json({
            massage: 'Server error'
        })
    }
});

module.exports = router;