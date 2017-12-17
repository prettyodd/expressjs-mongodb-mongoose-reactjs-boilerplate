import express from 'express';
import bodyParser from 'body-parser';
import Routes from './src/mongoose/routes/';

const app = express();
const PORT = 3000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes with ejs
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home', {
      content: 'ejs render from server'
    });
});
app.get('/movie', (req, res) => {
    res.render('home', {
      content: 'ejs render from server'
    });
});

// api routes with mongoose
app.use('/api', Routes);
app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);