const React = require('react');

function NoteTitle(props) {
    const {title} = props;
    return (
        <span className="card-title">{title}</span>
    );
}

module.exports = NoteTitle;