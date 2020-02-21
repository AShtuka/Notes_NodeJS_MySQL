const React = require('react');
const MainLayout = require('./layouts/main');
const Navbar = require('./components/notesPageNav');
const Note = require('./components/Note/note');
const AddTaskBtn = require('./components/addTaskBtn');

function NotesPage(props) {
    const {notes, categories} = props;
    return (
        <MainLayout {...props}>
            <Navbar categories={categories}/>
            <div className='row'>
                {notes.map((item, index) => <Note note={item} key={index}/>)}
                <AddTaskBtn/>
            </div>
        </MainLayout>
    );
}

module.exports = NotesPage;