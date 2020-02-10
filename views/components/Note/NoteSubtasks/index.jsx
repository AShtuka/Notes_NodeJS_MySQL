const React = require('react');

function NoteSubtask(props) {
    const {subtasks} = props;
    return (
        <table>
            <thead>
            <tr>
                <th className='first-column'></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                subtasks.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td><i className="material-icons">done</i></td>
                            <td>{item}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}

module.exports = NoteSubtask;