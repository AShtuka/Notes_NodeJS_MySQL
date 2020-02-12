const React = require('react');

function NoteMarkedItems(props) {
    return (
        <div className='flex-container'>
            <p id='addSubtask' className='marked-items' data-name='addSubtask'>
                <i className="material-icons position" data-name='addSubtask'>add</i>
                <span className='text' data-name='addSubtask'>Add subtask</span>
            </p>
            <p className='marked-items' data-name='markedSubtask'>
                <i className="material-icons position" data-name='markedSubtask'>arrow_drop_down</i>
                <span className='text' data-name='markedSubtask'>Done subtask</span>
            </p>
        </div>
    );
}

module.exports = NoteMarkedItems;