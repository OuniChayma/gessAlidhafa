const express = require('express');
const multer = require('multer');
const path = require('path');
const {verifyToken} =require('../verifyToken');

const router = express.Router();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });


router.post('/',verifyToken,upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'لم يتم رفع أي ملف' });
  }
  res.json({ fileName: req.file.filename, filePath: `/uploads/${req.file.filename}` });
});

module.exports = router;
