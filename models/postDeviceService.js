const db = require('./db');

const ReadListLedDevice = async (homeId) => {
    try {
        const [rows, fields] = await db.execute(`SELECT * FROM postDevice WHERE homeId = ? AND category = "led"`, homeId);
        return rows;
    } catch (error) {
        console.error(err);
        throw err;
    }
}

const ReadListFanDevice = async (homeId) => {
    try {
        const [rows, fields] = await db.execute(`SELECT * FROM postDevice WHERE homeId = ? AND category = "fan"`, homeId);
        return rows;
    } catch (error) {
        console.error(err);
        throw err;
    }
}

const ReadListPostDeviceIntoHomeId = async (homeId) => {
    try {
        const [rows, fields] = await db.execute(`SELECT * FROM postDevice WHERE homeId = ?`, homeId);
        return rows;
    } catch (error) {
        console.error(err);
        throw err;
    }
}

const UpdateRealTime = async (data) => {
    try {
        await db.execute(`UPDATE postdevice SET realTime = ? WHERE idDevice = ?`, data);
        return true
    } catch (error) {
        console.log(error);
        return false;
    }
}

const CheckDevice = async (data) => {
    try {
        const [rows, fields] = await db.execute(`SELECT * FROM postDevice WHERE idDevice = ? AND category = ?`, data);
        return rows;
    } catch (error) {
        console.error(err);
        throw err;
    }
}

const AddDeviceToHome = async (data) => {
    try {
        await db.execute(`UPDATE postdevice SET nameDevice = ?, deviceDescription = ?, homeId = ?  WHERE idDevice = ?`, data);
        return true
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    ReadListLedDevice : ReadListLedDevice,
    ReadListFanDevice : ReadListFanDevice,
    ReadListPostDeviceIntoHomeId : ReadListPostDeviceIntoHomeId,
    UpdateRealTime : UpdateRealTime,
    CheckDevice : CheckDevice,
    AddDeviceToHome : AddDeviceToHome,
}