const React = require('react');

function Footer(props) {
    return (
                <div className='flex-container footer-note-page grey darken-3'>

                    <a className='dropdown-trigger' data-name='categories' data-target='category'>
                        <i data-name='categories' className="material-icons position footer">category</i>
                        <span data-name='categories' className='text footer'> Categories</span>
                    </a>

                    <a data-name='addList'>
                        <i data-name='addList' className="material-icons position footer">list</i>
                        <span data-name='addList' className='text footer'> Add list</span>
                    </a>

                    <a data-name='addImage'>
                        <i data-name='addImage'className="material-icons position footer">image</i>
                        <span data-name='addImage' className='text footer'> Add image</span>
                    </a>

                    <a data-name='save'>
                        <i data-name='save' className="material-icons position footer">save</i>
                        <span data-name='save' className='text footer'> Save</span>
                    </a>

                    <a data-name='del'>
                        <i data-name='del' className="material-icons position footer">delete_forever</i>
                        <span data-name='del' className='text footer'> Delete</span>
                    </a>

                    <ul id='category' className='dropdown-content grey darken-3'>
                        <li><a href="#">one</a></li>
                        <li><a href="#">two</a></li>
                        <li><a href="#">three</a></li>
                    </ul>

                </div>
    );
}

module.exports = Footer;