import mongoose from "mongoose";

const gameslist = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    availability:{
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    relatedItems: {
        // name imageurl links
        type: Array,
        required:true,
    },
    reviews:{
        type: Array,
        required:false,
    }
})

const gameslisting = mongoose.model('gameslisting', gameslist);
export default gameslisting;