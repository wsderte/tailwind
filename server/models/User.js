import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
})

let User = mongoose.model('Card', userSchema)
export { User }