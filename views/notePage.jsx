const React = require('react');
const MainLayout = require('./layouts/main');
const Navbar = require('./components/notePageNav');
const Footer = require('./components/NoteModal/Footer');
const Title = require('./components/NoteModal/Title');
const Subtask = require('./components/NoteModal/Subtask');
const ManageSubtask = require('./components/NoteModal/ManageSubtask');

function NotePage(props) {
    return (
        <MainLayout {...props}>
            <Navbar />
            <div className='note-page-container grey-text text-lighten-5'>
                <h1>Hello</h1>
                <div className='flex-container'>
                    <a id='addList' data-name='addList' className='footer-item' href="#">
                        <i data-name='addList' className="material-icons position">list</i>
                        <span data-name='addList' className='text'> Add list</span>
                    </a>
                    <a id='addList' data-name='addList' className='footer-item' href="#">
                        <i data-name='addList' className="material-icons position">list</i>
                        <span data-name='addList' className='text'> Add list</span>
                    </a>
                </div>
            </div>
        </MainLayout>
    );
}

module.exports = NotePage;