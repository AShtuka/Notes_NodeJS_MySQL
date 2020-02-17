const React = require('react');

function Subtask(props) {
    const {subtask, isDone} = props;
    return (
        <li name='subtasksItem' className='flex-container'>
            <div className='small-box'>
                <label className='label' data-name='checkbox'>
                    <input type="checkbox" className='checkbox' defaultChecked={isDone}/>
                    <span data-name='checkbox'/>
                </label>
            </div>
            <div className='big-box'>
                <input className={isDone ? 'subtask line-through' : 'subtask'} name='subtask' type="text" defaultValue={subtask ? subtask : ''} />
            </div>
            <div className='small-box right' data-name='del'>
                <i className="material-icons del hidden" data-name='del'>close</i>
            </div>
        </li>
    );
}

module.exports = Subtask;