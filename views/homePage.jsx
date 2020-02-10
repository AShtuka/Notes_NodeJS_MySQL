const React = require('react');
const MainLayout = require('./layouts/main');

function HomePage(props) {
    return (
        <MainLayout {...props}>
            <h1>Welcome</h1>
            <p>The best courses here</p>
            <a href="/notesPage">Notes Page</a>
        </MainLayout>
    );
}

module.exports = HomePage;