const {Router} = require('express');
const router = Router();
const Note = require('../models/note');
const Subtask = require('../models/subtask');
const Category = require('../models/category');

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
        const subtasks = req.body.data.subtasks.map(item => ({title: item.title, isDone: item.isDone}));
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

router.post('/category/:id', async (req, res) => {
    const noteId = req.params.id;
    try {
        const category = await Category.create({
            name: req.body.categoryName,
        });
        const note = await Note.findByPk(+noteId);
        note.categoryId = category.id;
        await note.save();
        res.status(201).send();
    } catch (e) {
        console.log(e);
    };
});

router.put('/update', async (req, res) => {
    try {
        let note = await Note.findByPk(+req.body.data.noteId, {include: [Subtask]});
        note.title = req.body.data.noteTitle;
        const forUpdate = [];
        const forCreate = [];

        req.body.data.subtasks.forEach(item => {
            if (item.id !== '') {
                forUpdate.push(item);
            } else {
                forCreate.push(item);
            }
        });

        if (forCreate.length > 0) {
            forCreate.forEach(item => {
                item.noteId = +req.body.data.noteId;
                delete item.id
            });
            await Subtask.bulkCreate(forCreate);
        }

        note.subtasks.forEach(oldItem => {
            forUpdate.forEach(async (newItem, index) => {
                if (+newItem.id === +oldItem.id) {
                    oldItem.title = newItem.title;
                    oldItem.isDone = newItem.isDone;
                    await oldItem.save();
                    return;
                }
                if (index === forUpdate.length - 1) {
                    await oldItem.destroy()
                }
            })
        });

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