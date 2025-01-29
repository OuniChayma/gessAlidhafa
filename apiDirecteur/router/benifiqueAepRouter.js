const express = require('express')
const router = express.Router()

const {verifyToken} = require('../verifyToken');
const Benifique = require('../model/benifiqueAepModel');

//get all benifique
router.get('/',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const benifique = await Benifique.find({ active: 1 , idGess : idGess}); 
        res.status(200).send(benifique); 
    }catch(err){
        console.log(err);
        res.status(500).send({ message: 'Server error while fetching benifique' });
    }
})

//ajouter benifique
router.post('/ajouter',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const newBenifique = new Benifique();

        newBenifique.idGess=idGess ;
        newBenifique.name=req.body.name ;
        newBenifique.dateNaissance=req.body.dateNaissance ;
        newBenifique.CIN=req.body.CIN ;
        newBenifique.dateCIN=req.body.dateCIN ;
        newBenifique.adress=req.body.adress ;
        newBenifique.propriete=req.body.propriete ;
        newBenifique.tel=req.body.tel ;
        newBenifique.numFamille=req.body.numFamille ;
        newBenifique.unionFamiliale=req.body.unionFamiliale ;
        newBenifique.numPlace=req.body.numPlace ;
        newBenifique.numDiviseur= req.body.numDiviseur;
        newBenifique.aire=req.body.aire ;
        newBenifique.dateInscription=req.body.dateInscription ;
        newBenifique.numPrise=req.body.numPrise ;
        newBenifique.donneesCompteur=req.body.donneesCompteur ;
        newBenifique.numCompteur=req.body.numCompteur ;
        newBenifique.donneesCompteur=req.body.donneesCompteur ;
        newBenifique.email=req.body.email ;
        newBenifique.motpass=req.body.motpass ;
        newBenifique.active=1 ;

        const saveBenifique = await newBenifique.save();
        res.status(200).send(saveBenifique);

    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "benifique non cree !"})
    }
})

//modifier benifique
router.put('/modifier/:id',verifyToken,async(req,res)=>{
    try{
        const updatedbenifique = await Benifique.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedbenifique);
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "benifique non modifier !"})
    }
})

//supprimer benifique
router.put('/supprimer/:id',verifyToken,async(req,res)=>{
    try{
        await Benifique.findByIdAndUpdate(
            req.params.id,
            {"active": 0},
            { new: true }
        );
        res.status(200).send({"message" : "benifique supprimer !"});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "benifique non supprimer !"})
    }
})

//number de benifique
router.get('/count',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const count = await Benifique.countDocuments({ "active" : 1 , idGess : idGess});
        res.status(200).send({"message":"ok !","cont" : count});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "bad !"})
    }
})

module.exports = router