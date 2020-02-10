const React = require('react');
const Head = require('../partials/head');
const Footer = require('../partials/footer');

function MainLayout(props) {
    return (
        <html lang="en">
        <Head title={props.title}/>
            <body>
                <div>
                    {props.children}
                </div>
            <Footer />
            </body>
        </html>
    );
}

module.exports = MainLayout;