import mongoose from "mongoose";

const category = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
})

const categoryLocation = mongoose.model('categoryLocation', category);
export default categoryLocation;