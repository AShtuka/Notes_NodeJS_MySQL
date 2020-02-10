const express = require('express');
const expressReactView = require('express-react-views');
const path = require('path');


const homePageRoutes = require('./routes/homePage');
const notesPageRoutes = require('./routes/notesPage');

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', expressReactView.createEngine());

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));

app.use('/', homePageRoutes);
app.use('/notesPage', notesPageRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        });
    } catch (e) {
        console.log(e)
    }
}

start();




