const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PompisteSchema = new Schema ({
    idGess : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    } ,
    dateNaissance : {
        type : Date,
        required: true
    } ,
    CIN  : {
        type : Number,
        required: true
    },
    dateCIN : {
        type : Date,
        required: true
    } ,
    payement: {
        type : String,
        required: true
    } ,
    famille : {
        type : String,
        required: true
    } ,
    travail : {
        type : String,
        required: true
    } ,
    address : {
        type : String,
        required: true
    } ,
    tel : {
        type : String,
        required: true
    } ,
    email : {
        type : String,
        required: true
    } ,
    motpass : {
        type : String ,
        require : true
    } ,
    contrat : {
        type : String,
        require : true
    } ,
    type : {
        type :  Number,
        require : true
    },
    active : {
        type :  Number,
        require : true
    }
},{
    timestamps: true
})

const Pompiste = mongoose.model("Pompiste",PompisteSchema);
module.exports = Pompiste;