const React = require('react');

function NotePageNav(props) {
    return (
        <div className='navbar-fixed'>
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <a href="#" className="brand-logo left">
                        <img src="./img/batman-png-batman-png-png-image-700.png" alt="AVATAR"/>
                    </a>
                    <a href="/notesPage" className="brand-logo right">
                        <i className="material-icons">reply</i>
                        <img src="./img/batman-logo.jpg" alt="AVATAR"/>
                    </a>
                </div>
            </nav>
        </div>
    );
}

module.exports = NotePageNav;