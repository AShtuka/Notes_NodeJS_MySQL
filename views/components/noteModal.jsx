const React = require('react');

function NoteModal(props) {
    return (
                <div id="modal" className="modal">
                    <div className="modal-content grey-text text-lighten-5">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <div className='footer-nav'>
                            <a className='dropdown-trigger footer-nav-item' href="#" data-target='category'>
                                <i className="material-icons position">category</i>
                                <span className='text'> Choose category</span>
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
                </div>
    );
}

module.exports = NoteModal;