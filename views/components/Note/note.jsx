const React = require('react');
const NoteImage = require('./NoteImage');
const NoteTitle = require('./NoteTitle');
const NoteSubtasks = require('./NoteSubtasks');
const NoteMarkedItems = require('./NoteMarkedItems');

function Note(props) {
    const subtasksList = ['Marvel', 'DC', 'StarWars'];
    return (
        <a href="/notePage">
            <div className="col s10 m6 l4 xl3 offset-s1">
                <div className="card">

                    <NoteImage src='img/batman-png-batman-png-png-image-700.png'/>

                    <div className="card-content grey-text text-lighten-5">

                        <NoteTitle title='Card title'/>

                        <NoteSubtasks subtasks={subtasksList}/>

                        <NoteMarkedItems count={3}/>

                    </div>

                </div>
            </div>
        </a>
    );
}

module.exports = Note;