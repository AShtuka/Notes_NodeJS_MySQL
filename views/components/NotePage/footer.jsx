const React = require('react');

function Footer(props) {
    const {categories} = props;
    return (
        <>
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

                    <a data-name='delete'>
                        <i data-name='delete' className="material-icons position footer">delete_forever</i>
                        <span data-name='delete' className='text footer'> Delete</span>
                    </a>

                    <ul id='category' className='dropdown-content grey darken-3'>
                        <li><a href="#categoryModal" className='modal-trigger'>Create new category</a></li>
                        <li className="divider"/>
                        <li><a href="#" className='not-active'>General</a></li>
                        <li className="divider"/>
                        <li className="divider"/>
                        {categories
                            .filter(item => item.id !== 1)
                            .map((item, index) => <li key={index}><a href="#">{item.name}</a></li>)}
                    </ul>

                </div>

                <div id="categoryModal" className="modal">
                    <form action="/notePage/category" method='POST'>
                        <div className="modal-content">
                            <div className="input-field">
                                <input id="category_name" type="text" name='categoryName' className="validate" />
                                <label htmlFor="category_name">Category Name</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button id='createCategory' type='button' className="modal-close waves-effect waves-green btn-flat">Save</button>
                        </div>
                    </form>
                </div>

        </>
    );
}

module.exports = Footer;