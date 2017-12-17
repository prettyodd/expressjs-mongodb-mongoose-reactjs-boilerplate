import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        unique: true,
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
