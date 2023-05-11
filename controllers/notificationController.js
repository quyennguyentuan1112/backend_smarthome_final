const db = require('../models/db');

const notificationService = require('../models/notificationService');

const deleteAllNotification = async (req, res) => {
    const {homeId} = req.body;
    try {
        const success = await notificationService.DeleteAllNotification([homeId]);
        if (success) {
            res.json({success: true, message: "delete succeed"});
        } else {
            res.json({success: false, message: "delete failed"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error delete notification process" });
    }   
}

const addEvent = async (req, res) => {
    try {
        const {messageDescription, result, homeId} = req.body;
        const success = await notificationService.AddEvent([messageDescription, result, homeId]);
        if (success) {
            res.json({success: true, message: "add event succeed"});
        } else {
            res.json({success: false, message: "add event failed"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error add event process" });
    }
}

const countUnSeen = (data) => {
    let n = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].isSeen == false) n++;
    }
    return n;
}

const getListNotification = async (req, res) => {
    try {
        const {homeId} = req.body;
        const data = await notificationService.GetListNotification([homeId]);
        const countUnSeenNoti = await countUnSeen(data);
        console.log(data);
        res.json({success: true, countUnSeenNoti, data});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error add event process" });
    }
}

const updateSeen = async (req, res) => {
    try {
        const {homeId} = req.body;
        const success = await notificationService.UpdateSeen([homeId]);
        if (success) {
            res.json({success: true, message: "update seen succeed"});
        } else {
            res.json({success: false, message: "update seen failed"});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "error update seen process" });
    }
} 
 


module.exports = {
    deleteAllNotification : deleteAllNotification,
    addEvent : addEvent,
    getListNotification : getListNotification,
    updateSeen : updateSeen,
}