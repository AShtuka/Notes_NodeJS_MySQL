const React = require('react');
const MainLayout = require('./layouts/main');
const Navbar = require('./components/notesPageNav');
const Note = require('./components/note');

function NotesPage(props) {
    return (
        <MainLayout {...props}>
            <Navbar />
            <div className='row'>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </MainLayout>
    );
}

module.exports = NotesPage;