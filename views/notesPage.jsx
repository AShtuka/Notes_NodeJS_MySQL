const React = require('react');
const MainLayout = require('./layouts/main');
const Navbar = require('./components/notesPageNav');
const Note = require('./components/Note/note');
const AddTaskBtn = require('./components/addTaskBtn');

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
                <Note />
                <Note />
                <Note />
                <Note />
                <AddTaskBtn/>
                {/*<NoteModal />*/}
            </div>
        </MainLayout>
    );
}

module.exports = NotesPage;