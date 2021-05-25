const mongoose = require('mongoose');

const pages = mongoose.Schema({

    about_header:{
        type: String,
        required: true
    },
    about_header_font_size: {
        type: String,
        required: true
    },
    about_header_font_wight: {
        type: String,
        required: true
    },
    about_header_font_color: {
        type: String,
        required: true
    },


    gallery_header:{
        type: String,
        required: true
    },
    gallery_header_font_size: {
        type: String,
        required: true
    },
    gallery_header_font_wight: {
        type: String,
        required: true
    },
    gallery_header_font_color: {
        type: String,
        required: true
    },

    projects_header:{
        type: String,
        required: true
    },
    projects_header_font_size: {
        type: String,
        required: true
    },
    projects_header_font_wight: {
        type: String,
        required: true
    },
    projects_header_font_color: {
        type: String,
        required: true
    },

    contact_header:{
        type: String,
        required: true
    },
    contact_header_font_size: {
        type: String,
        required: true
    },
    contact_header_font_wight: {
        type: String,
        required: true
    },
    contact_header_font_color: {
        type: String,
        required: true
    },


    features_header:{
        type: String,
        required: true
    },
    features_header_font_size: {
        type: String,
        required: true
    },
    features_header_font_wight: {
        type: String,
        required: true
    },
    features_header_font_color: {
        type: String,
        required: true
    },

    statistics_header:{
        type: String,
        required: true
    },
    statistics_header_font_size: {
        type: String,
        required: true
    },
    statistics_header_font_wight: {
        type: String,
        required: true
    },
    statistics_header_font_color: {
        type: String,
        required: true
    },


    
}, {timestamps: true})



mongoose.set('useNewUrlParser', true);  
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const Pages = mongoose.model('pages' , pages);
module.exports = Pages;