const React = require('react');

function Footer(props) {
    return (
        <>
            <div className="modal-footer">
                <div className='footer-nav'>
                    <a className='dropdown-trigger footer-nav-item' href="#" data-target='category'>
                        <i className="material-icons position">category</i>
                        <span className='text'> Categories</span>
                    </a>
                    <a className='footer-nav-item' href="#">
                        <i className="material-icons position">list</i>
                        <span className='text'> Add list</span>
                    </a>
                    <a className='footer-nav-item' href="#">
                        <i className="material-icons position">image</i>
                        <span className='text'> Add image</span>
                    </a>
                    <a className='footer-nav-item' href="#">
                        <i className="material-icons position">save</i>
                        <span className='text'> Save</span>
                    </a>
                    <a className='footer-nav-item' href="#">
                        <i className="material-icons position">delete_forever</i>
                        <span className='text'> Delete</span>
                    </a>
                </div>
            </div>
            <ul id='category' className='dropdown-content grey darken-3'>
                <li><a href="#">one</a></li>
                <li><a href="#">two</a></li>
                <li><a href="#">three</a></li>
            </ul>
        </>
    );
}

module.exports = Footer;