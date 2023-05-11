const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController')
const postDeviceController = require('../controllers/postDeviceController');
const notificationController = require('../controllers/notificationController');



router.post('/check-home', homeController.checkHome);


router.post('/read-list-led-device', postDeviceController.readListLedDevice);
router.post('/read-list-fan-device', postDeviceController.readListFanDevice);
router.post('/read-list-post-device-into-homeid', postDeviceController.readListPostDeviceIntoHomeId);
router.post('/updete-real-time', postDeviceController.updateRealTime);
router.post('/add-device-to-home', postDeviceController.addDeviceToHome);

router.post('/get-list-notification', notificationController.getListNotification);
router.post('/delete-all-notification', notificationController.deleteAllNotification);
router.post('/add-event', notificationController.addEvent);
router.post('/update-seen', notificationController.updateSeen);


router.get('/', (req, res) => {
    res.json({success: true, message: 'Welcome to backend zone!'});
})

module.exports = router;