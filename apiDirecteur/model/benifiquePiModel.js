const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BenifiquePiSchema = new Schema ({
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
    adress: {
        type : String,
        required: true
    } ,
    propriete : {
        type : String,
        required: true
    } ,
    tel : {
        type : String,
        required: true
    } ,
    dette : {
        type : Number,
        required: true
    } ,
    dateInscription : {
        type : Date,
        required: true
    } ,
    numPlace : {
        type : Number ,
        require : true
    },
    numDiviseur:{
        type : Number,
        require : true
    },
    aire : {
        type : Number ,
        require : true
    },
    numPrise : {
        type : Number,
        require : true
    },
    numCompteur : {
        type : Number ,
        require : true
    },
    donneesCompteur : {
        type : Number ,
        require : true
    },
    numBranch : {
        type : Number,
        require : true
    },
    nature : {
        type : String,
        require : true
    },
    email : {
        type : String,
        required: true
    } ,
    motpass : {
        type : String ,
        require : true
    } ,
    active : {
        type :  Number,
        require : true
    }
},{
    timestamps: true
})

const BenifiquePi = mongoose.model("BenifiquePi",BenifiquePiSchema);
module.exports = BenifiquePi;