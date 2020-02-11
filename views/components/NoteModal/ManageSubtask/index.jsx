const React = require('react');

function NoteMarkedItems(props) {
    return (
        <div className='flex-container'>
            <p id='addSubtask' className='marked-items'>
                <i className="material-icons position">add</i>
                <span className='text'>Add subtask</span>
            </p>
            <p className='marked-items'>
                <i className="material-icons position">arrow_drop_down</i>
                <span className='text'>Done subtask</span>
            </p>
        </div>
    );
}

module.exports = NoteMarkedItems;