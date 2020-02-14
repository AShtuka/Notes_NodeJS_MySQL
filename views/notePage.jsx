const React = require('react');
const MainLayout = require('./layouts/main');
const Navbar = require('./components/notePageNav');
const Footer = require('./components/NotePage/footer');
const Title = require('./components/NotePage/title');
const Subtask = require('./components/NoteModal/Subtask');
const ManageSubtask = require('./components/NoteModal/ManageSubtask');

function NotePage(props) {
    return (
        <MainLayout {...props}>
            <Navbar />
            <div className='note-page-container grey-text text-lighten-5'>
                <Title />
                <Footer />
            </div>
        </MainLayout>
    );
}

module.exports = NotePage;