const React = require('react');
const MainLayout = require('./layouts/main');
const Navbar = require('./components/notePageNav');
const Footer = require('./components/NotePage/footer');
const Title = require('./components/NotePage/title');
const Subtask = require('./components/NotePage/subtask');
const ManageSubtask = require('./components/NotePage/manageSubtask');

function NotePage(props) {
    const {note, categories} = props;
    return (
        <MainLayout {...props}>
            <Navbar />
            <div id='notePage' data-id = {note ? note.id : ''} className='note-page-container grey-text text-lighten-5'>
                <div className='row note-page'>
                    <Title note={note}/>
                    <ul id='subtasksContainer' className=
                        {note ?
                            'subtasks-container col s12 m10 offset-m1 l6 xl6' :
                            'subtasks-container col s12 m10 offset-m1 l6 xl6 hidden'
                        }>
                        <div id='inWork'>
                            {note ? note.subtasks
                                .filter(item => !item.isDone )
                                .map((item, index) => <Subtask key={index} subtask={item.title} id={item.id}/>)
                                : <Subtask />
                            }
                        </div>
                        <ManageSubtask />
                        <div id='done' className='hidden'>
                            {note ? note.subtasks
                                    .filter(item => item.isDone )
                                    .map((item, index) => <Subtask key={index} subtask={item.title} isDone={true} id={item.id}/>)
                                : null
                            }
                        </div>
                    </ul>
                </div>
                <Footer categories={categories} />
            </div>
        </MainLayout>
    );
}

module.exports = NotePage;