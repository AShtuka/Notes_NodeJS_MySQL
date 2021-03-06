const React = require('react');
const NoteImage = require('../Note/NoteImage');

function Title(props) {
    const {note} = props;
    return (
            <div className="input-field col s12 m10 offset-m1 l6 xl6">
                <input id="title" type="text" name='title' defaultValue={note ? note.title : 'Task title'}/>
                <NoteImage src='/img/batman-png-batman-png-png-image-700.png'/>
                <h5>Category: {note ? note.category.dataValues.name : 'General'}</h5>
            </div>
            );
}

module.exports = Title;