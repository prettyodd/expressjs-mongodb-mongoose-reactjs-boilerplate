import express from 'express';
import mongoose from 'mongoose';
import { 
    addNewUser
} from '../controllers/userController';

// mongoose setuo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useMongoClient: true
});

const Routes = express.Router();

Routes.get('/', (req, res) => {
    res.send(`api data render with mongoose`)
});
Routes.get('/movie', (req, res) => {
    res.send('api data render with mongoose')
});

Routes.post('/', addNewUser);

export default Routes;
