const mongoose = require('mongoose');


const project = mongoose.Schema({
    project_img:{
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

    english_sub_header: {
        type: String,
        required: true
    },
    arabic_sub_header: {
        type: String,
        required: true
    },

    order:{
        type: String,
        required: true
    }
}, {timestamps: true})


mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Project = mongoose.model('project' , project);
module.exports = Project;