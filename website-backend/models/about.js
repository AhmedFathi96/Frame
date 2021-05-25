const mongoose = require('mongoose');


const about = mongoose.Schema({
    about_img:{
        type: Buffer ,
        required: true
    },
    english_header: {
        type: String,
        required: true
    },
    arabic_header: {
        type: String,
        required: true
    },

    english_content: {
        type: String,
        required: true
    },
    arabic_content: {
        type: String,
        required: true
    },

    
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const About = mongoose.model('about' , about);
module.exports = About;