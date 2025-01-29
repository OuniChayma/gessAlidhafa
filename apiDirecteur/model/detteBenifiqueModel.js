const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetteBenifiqueSchema = new Schema ({
    idGess : {
        type : String,
        required: true
    },
    name : {
        type : String,
        required: true
    } ,
    montant : {
        type : Number,
        required: true
    } ,
    numFacture  : {
        type : Number,
        required: true
    },
    date : {
        type : Date,
        required: true
    } ,
    activ : {
        type : String,
        required: true
    } ,
    otre_non : {
        type : String,
        required: true
    }  
},{
    timestamps: true
})

const DetteBenifique = mongoose.model("DetteBenifique",DetteBenifiqueSchema);
module.exports = DetteBenifique;