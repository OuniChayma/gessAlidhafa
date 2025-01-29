const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MembreSchema = new Schema ({
    idGess : {
        type : String,
        required: true
    },
    idBenefique  : {
        type : String,
        required: true
    } ,
    typeDemande : {
        type : String,
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
    dateConseil: {
        type : Date,
        required: true
    } ,
    dateCreationDemande : {
        type : Date,
        required: true
    } ,
    placeCreationDemande : {
        type : String ,
        required: true
    } ,
    frontCIN : {
        type : String ,
        require : true
    },
    backCIN : {
        type : String ,
        require : true
    },
    resultat : {
        type : String ,
        require : true
    },
    dateAcceptation : {
        type : Date ,
        require : true
    }

},{
    timestamps: true
})

const Membre = mongoose.model("Membre",MembreSchema);
module.exports = Membre;