const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comptaSchema = new Schema ({
    id : {
        type : String,
        required: true
    },
    date : {
        type : date,
        required: true
    } ,
    rapport : {
        type : Number,
        required: true
    } ,
    
Numeros_reçus_cheques  : {
        type : Number,
        required: true
    },
    Adhesions : {
        type : Number,
        required: true
    } ,
    vente_eau: {
        type : Number,
        required: true
    } ,
    Autres_revenus : {
        type : Number,
        required: true
    } ,
    Revenus_divers : {
        type : Number,
        required: true
    } ,
    Achat_eau : {
        type : Number,
        required: true
    } ,
    Energie : {
        type : Number,
        required: true
    } ,
    Autres_frais_exploitation : {
        type : Number ,
        require : true
    },
    Maintenance_reparation:{
        type : Number,
        require : true
    },
    Salaires : {
        type : Number ,
        require : true
    },
    Gestion_comportement: {
        type : Number,
        require : true
    },
    Dépenses_diverses : {
        type : Number ,
        require : true
    },
    Depenses_autres_activites : {
        type : Number ,
        require : true
    },
    Investissement_equipement : {
        type : Number,
        require : true
    },
    Revenu : {
        type : Number,
        require : true
    },
    Depense : {
        type : Number,
        required: true
    } ,
    Revenu : {
        type : Number ,
        require : true
    } ,
    Depense : {
        type :  Number,
        require : true
    }
})

const compta = mongoose.model("compta",comptaSchema);
module.exports = compta;









