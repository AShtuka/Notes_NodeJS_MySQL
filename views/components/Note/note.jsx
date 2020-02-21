const React = require('react');
const NoteImage = require('./NoteImage');
const NoteTitle = require('./NoteTitle');
const NoteSubtasks = require('./NoteSubtasks');
const NoteMarkedItems = require('./NoteMarkedItems');

function Note(props) {
    const {note} = props;
    const subtasksList = note.subtasks.filter(item => !item.isDone);
    const count = note.subtasks.length - subtasksList.length;
    return (
        <a href={`/notePage/${note.id}`}>
            <div className="col s10 m6 l4 xl3 offset-s1">
                <div className="card">

                    <NoteImage src='img/batman-png-batman-png-png-image-700.png'/>

                    <div className="card-content grey-text text-lighten-5">

                        <NoteTitle title={note.title}/>

                        <h6>Category: {note.category.dataValues.name}</h6>

                        <NoteSubtasks subtasks={subtasksList}/>

                        <NoteMarkedItems count={count}/>

                    </div>

                </div>
            </div>
        </a>
    );
}

module.exports = Note;