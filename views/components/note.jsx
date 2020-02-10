const React = require('react');

function Note(props) {
    return (
            <div className="col s10 m6 l4 xl3 offset-s1">
                <div className="card">
                    <div className="card-image">
                        <img src="img/batman-png-batman-png-png-image-700.png" />
                    </div>
                    <div className="card-content">
                        <span className="card-title">Card Title</span>
                        <table>
                            <thead>
                            <tr>
                                <th className='first-column'></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><i className="material-icons">done</i></td>
                                <td>Eclair</td>
                            </tr>
                            <tr>
                                <td><i className="material-icons">done</i></td>
                                <td>Jellybean</td>
                            </tr>
                            <tr>
                                <td><i className="material-icons">done</i></td>
                                <td>Lollipop</td>
                            </tr>
                            </tbody>
                        </table>
                        <p className='marked-items'>
                            <i className="material-icons position">add_circle_outline</i>
                            <span className='text'>marked items</span>
                        </p>
                    </div>
                </div>
            </div>
    );
}

module.exports = Note;