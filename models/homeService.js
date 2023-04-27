const db = require('./db');

const CheckHome = async (data) => {
    try {
        const [rows, fields] = await db.execute(`SELECT * FROM home WHERE homeId = ? AND password = ?`, data);
        return rows;
    } catch (error) {
        console.error(err);
        throw err;
    }
}


module.exports = {
    CheckHome : CheckHome,
}