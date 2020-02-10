const React = require('react');

function NoteImage(props) {
    const {src} = props;
    return (
        <div className="card-image">
            <img src={src} />
        </div>
    );
}

module.exports = NoteImage;