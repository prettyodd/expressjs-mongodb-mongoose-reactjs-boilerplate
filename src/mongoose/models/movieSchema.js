import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MovieSchema = new Schema({
    movieTitle: {
        type: String,
    },
    review: [{
        user_id: String,
        content: String
    }]
});
