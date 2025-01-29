const express = require('express')
const router = express.Router()

const {verifyToken} = require('../verifyToken');
const Membre = require('../model/membreModel');

//get all Membre
router.get('/' ,verifyToken, async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const Membres = await Membre.find({ type: 1, active: 1 , idGess : idGess}); 
        res.status(200).send(Membres); 
    }catch(err){
        console.log(err);
        res.status(500).send({ message: 'Server error while fetching Membres' });
    }
})

//add Membre
router.post('/ajouter',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const newMembre = new Membre();
        newMembre.idGess=idGess ;
        newMembre.idBenefique=req.body.idBenefique ;
        newMembre.typeDemande=req.body.typeDemande ;
        newMembre.CIN=req.body.CIN ;
        newMembre.dateConseil=req.body.dateConseil ;
        newMembre.dateCreationDemande=req.body.dateCreationDemande ;
        newMembre.placeCreationDemande=req.body.placeCreationDemande ;
        newMembre.frontCIN=req.body.frontCIN ;
        newMembre.backCIN=req.body.backCIN ;
        newMembre.resultat=req.body.resultat ;
        newMembre.dateAcceptation=req.body.dateAcceptation ;

        const saveMembre = await newMembre.save();
        res.status(200).send(saveMembre);

    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "Membre non cree !"})
    }
})

//modifier Membre
router.put('/modifier/:id',verifyToken,async(req,res)=>{
    try{
        const updatedMembre = await Membre.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedMembre);
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "Membre non modifier !"})
    }
})

//supprimer Membre
router.put('/supprimer/:id',verifyToken,async(req,res)=>{
    try{
        await Membre.findByIdAndUpdate(
            req.params.id,
            {"active": 0},
            { new: true }
        );
        res.status(200).send({"message" : "Membre supprimer !"});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "Membre non supprimer !"})
    }
})

//number de Membre
router.get('/count',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const count = await Membre.countDocuments({"type" : 1 , "active" : 1 , idGess : idGess});
        res.status(200).send({"message":"ok !","cont" : count});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "bad !"})
    }
})
module.exports = router