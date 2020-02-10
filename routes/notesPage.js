const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('notesPage', {title : 'NotesPage', isNotes: true});
});

module.exports = router;