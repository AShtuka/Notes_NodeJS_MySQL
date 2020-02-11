const React = require('react');

function Subtask(props) {
    return (
        <li name='subtasksList' className='flex-container'>
                <div className='small-box'>
                    <label htmlFor='0'>
                        <input type="checkbox" id='0' />
                        <span/>
                    </label>
                </div>
                <div className='big-box'>
                    <input name='subtask' type="text" />
                </div>
                <div className='small-box right'>
                    <i className="material-icons">close</i>
                </div>
        </li>
    );
}

module.exports = Subtask;