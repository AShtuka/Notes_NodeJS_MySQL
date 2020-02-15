const React = require('react');
const MainLayout = require('./layouts/main');
const Navbar = require('./components/notePageNav');
const Footer = require('./components/NotePage/footer');
const Title = require('./components/NotePage/title');
const Subtask = require('./components/NotePage/subtask');
const ManageSubtask = require('./components/NotePage/manageSubtask');

function NotePage(props) {
    return (
        <MainLayout {...props}>
            <Navbar />
            <div id='notePage' className='note-page-container grey-text text-lighten-5'>
                <div className='row note-page'>
                    <Title />
                    <ul id='subtasksContainer' className='subtasks-container hidden col s12 m10 offset-m1 l6 xl6'>
                        <div id='inWork'>
                            <Subtask />
                        </div>
                        <ManageSubtask />
                        <div id='done' className='hidden'></div>
                    </ul>
                </div>
                <Footer />
            </div>
        </MainLayout>
    );
}

module.exports = NotePage;