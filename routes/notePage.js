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
        let note = await Note.findByPk(+req.body.data.noteId);
        note.title = req.body.data.noteTitle;
        const updateSubtasks = req.body.data.subtasks;
        const oldSubtasks = Subtask.findAll({where: {noteId: +req.body.data.noteId}});
        console.log(JSON.stringify(oldSubtasks));
        // oldSubtasks.forEach(item => {
        //     updateSubtasks.forEach(newItem => {
        //         if (newItem.id === item.id) {
        //             item.title = newItem.subtask;
        //             item.isDone = newItem.isChecked;
        //         }
        //     })
        // });
        await note.save();
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