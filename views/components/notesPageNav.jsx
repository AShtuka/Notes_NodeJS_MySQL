const React = require('react');

function NotesPageNav(props) {
    return (
        <nav>
            <div className="nav-wrapper grey darken-3">
                <a href="#" className="brand-logo">
                    <img src="./img/batman-png-batman-png-png-image-700.png" alt="AVATAR"/></a>
                <form>
                    <div className="input-field">
                        <input id="search" type="search" required />
                            <label className="label-icon" htmlFor="search"><i
                                className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                    </div>
                </form>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a className="dropdown-trigger" href="#" data-target="categories">
                            Categories
                            <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </li>
                    <li><a href="#">Log Out</a></li>
                </ul>
            </div>
            <ul id="categories" className="dropdown-content grey darken-3">
                <li><a href="#">one</a></li>
                <li><a href="#">two</a></li>
                <li><a href="#">three</a></li>
            </ul>
        </nav>
    );
}

module.exports = NotesPageNav;