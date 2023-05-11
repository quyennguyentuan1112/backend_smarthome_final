const db = require('./db');

const DeleteAllNotification = async (homeId) => {
    try {
        await db.execute(`DELETE FROM notification WHERE homeId = ?`, homeId);
        return true
    } catch (error) {
        console.log(error);
        return false;
    }
}

const AddEvent = async (data) => {
    try {
        await db.execute(`INSERT INTO notification (messageDescription, result, homeId) VALUE (?, ?, ?)`, data);
        return true
    } catch (error) {
        console.log(error);
        return false;
    }
}

const GetListNotification = async (homeId) => {
    try {
        const [rows, fields] = await db.execute(`SELECT id, messageDescription, result, homeId, DATE_FORMAT(createdAt, '%Y-%m-%d %H:%i:%s') AS formattedDatetime, isSeen FROM notification WHERE homeId = ? ORDER BY createdAt DESC`, homeId);
        return rows;
    } catch (error) {
        console.error(err);
        throw err;
    }
}

const UpdateSeen = async (homeId) => {
    try {
        await db.execute(`UPDATE notification SET isSeen = TRUE WHERE homeId = ?`, homeId);
        return true
    } catch (error) {
        console.log(error);
        return false;
    }
}



module.exports = {
    DeleteAllNotification: DeleteAllNotification,
    AddEvent: AddEvent,
    GetListNotification : GetListNotification,
    UpdateSeen : UpdateSeen,
}