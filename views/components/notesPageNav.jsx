const React = require('react');

function NotesPageNav(props) {
    return (
        <div className='navbar-fixed'>
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <a href="#" className="brand-logo">
                        <img src="./img/batman-png-batman-png-png-image-700.png" alt="AVATAR"/>
                    </a>
                    <a href="#" data-target="navBar" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <form id='search'>
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
                    <li><a href="#">All</a></li>
                    <li><a href="#">General</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#">three</a></li>
                </ul>
                <ul className="sidenav" id="navBar">
                    <li className='active'>
                        <a className="dropdown-trigger" href="#" data-target="categoriesM">
                            Categories
                            <i className="material-icons right">arrow_drop_down</i>
                        </a>
                    </li>
                    <li><a href="#">Log Out</a></li>
                </ul>

                <ul id="categoriesM" className="dropdown-content grey darken-3">
                    <li><a href="#">All</a></li>
                    <li><a href="#">General</a></li>
                    <li className="divider" tabIndex="-1"></li>
                    <li><a href="#">three</a></li>
                </ul>
            </nav>
        </div>
    );
}

module.exports = NotesPageNav;