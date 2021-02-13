//몽구스 모듈 가져오기
const mongoose = require('mongoose');

const userSchemna = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim : true,
        unique : 1
    },
    password : {
        type : String,
        minlenght : 5
    },
    lastname : {
        type : String,
        maxlength: 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    toeknExp : {
        type: Number
    }
})

const user = mongoose.model('User', userSchemna)

//이 모듈을 다른곳에서도 쓸수있게 export
module.export = { User }
