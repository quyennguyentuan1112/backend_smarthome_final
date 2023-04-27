const db = require('../models/db');

const homeService = require('../models/homeService');


const checkHome = async (req, res) => {
    try {
        const { homeId, password } = req.body;
        const home = await homeService.CheckHome([homeId, password]);
        if (home.length === 0) {
            res.json({ success: false, message: "Không đúng homeId hoặc password"})
        } else {
            res.json({ success: true});
        }
    } catch (error) {
        res.json({ success: false, message: "error check home process" });
        console.error(error);
    }
}

module.exports = {
    checkHome : checkHome,
}