const React = require('react');
const MainLayout = require('./layouts/main');
const Navbar = require('./components/notePageNav');

function NotePage(props) {
    return (
        <MainLayout {...props}>
            <Navbar />
            <h1>Hello World</h1>
        </MainLayout>
    );
}

module.exports = NotePage;