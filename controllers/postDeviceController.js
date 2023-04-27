const db = require('../models/db');

const postDeviceService = require('../models/postDeviceService');

const readListLedDevice = async (req, res) => {
    try {
        const { homeId } = req.body;
        const data = await postDeviceService.ReadListLedDevice([homeId]);
        res.json({success: true, data}); 
    } catch (error) {
        res.json({ success: false, message: "error read list led device process" });
        console.error(error);
    }
}

const readListFanDevice = async (req, res) => {
    try {
        const { homeId } = req.body;
        const data = await postDeviceService.ReadListFanDevice([homeId]);
        res.json({success: true, data}); 
    } catch (error) {
        res.json({ success: false, message: "error read list led device process" });
        console.error(error);
    }
}

const readListPostDeviceIntoHomeId = async (req, res) => {
    try {
        const { homeId } = req.body;
        const data = await postDeviceService.ReadListPostDeviceIntoHomeId([homeId]);
        res.json({success: true, data}); 
    } catch (error) {
        res.json({ success: false, message: "error read list led device process" });
        console.error(error);
    }
}


const updateRealTime = async (req, res) => {
    try {
        const {idDevice, realTime} =req.body;
        const success = await postDeviceService.UpdateRealTime([realTime, idDevice]);
        if (success) {
            res.json({success: true, message: "update succeed"});
        } else {
            res.json({success: false, message: "update failed"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error update real time led device process" });
    }
}

const addDeviceToHome = async (req, res) => {
    try {
        const {idDevice, deviceType, nameDevice, deviceDescription, homeId} = req.body;
        const deviceCheck = await postDeviceService.CheckDevice([idDevice, deviceType]);
        // console.log(deviceCheck);
        // console.log(deviceCheck[0].homeId,"and home lengh: ", deviceCheck[0].homeId.length);
        if (deviceCheck.length === 0 ) res.json({success: false, message: "Device not found"})
        else if (deviceCheck[0].homeId.length > 0 ) res.json({success: false, message: "Device is use by other home"});
        else {
            const success = await postDeviceService.AddDeviceToHome([nameDevice, deviceDescription, homeId, idDevice]);
            if (success === false) res.json({success: false, message: "add device failed"});
            else res.json({success: true, message: "add device to home succeed"})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "add device failed"})
    }
}

module.exports = {
    readListLedDevice : readListLedDevice,
    readListFanDevice : readListFanDevice,
    readListPostDeviceIntoHomeId : readListPostDeviceIntoHomeId,
    updateRealTime : updateRealTime,
    addDeviceToHome : addDeviceToHome,
}