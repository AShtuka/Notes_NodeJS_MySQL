const React = require('react');

function AddTaskBtn(props) {
    return (
        <a className="btn-large modal-trigger grey darken-3" href="/notePage">
            <i className="material-icons position">add</i>
            <span className='text'>New Task</span>
        </a>
    );
}

module.exports = AddTaskBtn;