const express = require('express');
const imageController = require("../controlles/imageController");
const router = express.Router();

router.post('/upload', imageController.uploadImage, imageController.saveImage);
router.use('/uploads', express.static('uploads'));
router.get('/get-list-images', imageController.listImages);

module.exports = router;
