const {Schema, model} = require('mongoose')

const moviesSchema = new Schema({

    title: {
        type: String,
        //required: true
    },
    year: {
        type: String,
        //required: true
        //default: Date.now
    },
    cover: {
        type: String,
        default: 'http://dummyimage.com/184x223.jpg/ff4444/ffffff'
    },
    description: String,
    duration: String,
    contentRating: String,
    source: {
        type: String,
        default: 'https://census.gov/volutpat.png'
    },
    tags:[String]

},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Movie', moviesSchema)