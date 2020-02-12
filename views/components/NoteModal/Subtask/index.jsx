const React = require('react');

function Subtask(props) {
    return (
        <li name='subtasksItem' className='flex-container'>
                <div className='small-box'>
                    <label htmlFor='0' className='label' data-name='checkbox'>
                        <input type="checkbox" id='0' className='checkbox' />
                        <span data-name='checkbox'/>
                    </label>
                </div>
                <div className='big-box'>
                    <input className='subtask' name='subtask' type="text" />
                </div>
                <div className='small-box right'>
                    <i className="material-icons">close</i>
                </div>
        </li>
    );
}

module.exports = Subtask;