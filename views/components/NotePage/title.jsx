const React = require('react');

function Title(props) {
    return (
        <div className="row">
            <div className="input-field col s12  m12 l12">
                <input id="title" type="text" name='title' defaultValue='Note Title'/>
            </div>
        </div>
    );
}

module.exports = Title;