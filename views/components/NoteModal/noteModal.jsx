const React = require('react');
const Footer = require('./Footer');
const Title = require('./Title');
const Subtask = require('./Subtask');
const ManageSubtask = require('./ManageSubtask');

function NoteModal(props) {
    return (
                <div id="modal" className="modal">
                    <div className="modal-content grey-text text-lighten-5">
                        <Title/>
                        <div>
                            <ul id='subtasksContainer' className='subtasks-container hidden'>
                                <div id='inWork'>
                                    <Subtask />
                                </div>
                                <ManageSubtask />
                                <div id='done'></div>
                            </ul>
                        </div>
                    </div>
                    <Footer/>
                </div>
    );
}

module.exports = NoteModal;