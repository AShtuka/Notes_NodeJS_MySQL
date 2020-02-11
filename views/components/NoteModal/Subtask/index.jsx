const React = require('react');

function Subtask(props) {
    return (
        <li className='subtask'>
            <div className='row check'>
                <div className='col s1 check-position'>
                    <label htmlFor='one'>
                        <input type="checkbox" id='one' />
                        <span/>
                    </label>
                </div>
                <div className="input-field col s10 check">
                    <input id="subtask" name='subtask' type="text" />
                </div>
                <div className='col s1 check-position-close'>
                    <i className="material-icons">close</i>
                </div>
            </div>
        </li>
    );
}

module.exports = Subtask;