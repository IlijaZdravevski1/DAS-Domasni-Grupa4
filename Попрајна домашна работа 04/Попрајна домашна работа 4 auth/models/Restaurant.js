const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name_en: {
        type: String,
        required: true
    },
    lat:{
        type:Number,
        required:true
    },   
    long:{
        type:Number,
        required:true
    },
    category: {
        type: String,
        required: true
    }
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;