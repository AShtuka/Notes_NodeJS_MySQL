const React = require('react');

function NoteMarkedItems(props) {
    const {count} = props;
    return (
        <p className='marked-items'>
            <i className="material-icons position">add_circle_outline</i>
            <span className='text'>{count} marked items</span>
        </p>
    );
}

module.exports = NoteMarkedItems;