const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController')
const postDeviceController = require('../controllers/postDeviceController');



router.post('/check-home', homeController.checkHome);


router.post('/read-list-led-device', postDeviceController.readListLedDevice);
router.post('/read-list-fan-device', postDeviceController.readListFanDevice);
router.post('/read-list-post-device-into-homeid', postDeviceController.readListPostDeviceIntoHomeId);
router.post('/updete-real-time', postDeviceController.updateRealTime);
router.post('/add-device-to-home', postDeviceController.addDeviceToHome);


router.get('/', (req, res) => {
    res.json({success: true, message: 'Welcome to backend zone!'});
})

module.exports = router;