const jwt = require('jsonwebtoken');
require('dotenv').config();


const verifyToken = (req, res, next) => {
    if(req.headers['token']){
        const token = req.headers['token'];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'Unauthorized' }); 
            }
    
            req.user = decoded; 
            next(); 
        });
    }else{
        return res.status(403).send({ message: 'No token provided' })
    }

};

const getIdGessFromToken = (token) => {
    try {
        if (!token) throw new Error('Token is missing');

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        return decoded.existePompiste.idGess;
    } catch (err) {
        console.error('Error verifying token:', err.message);
        return null;
    }
};

module.exports = {verifyToken,getIdGessFromToken};
