const logger = require("../utils/logger")

module.exports = {
    async test(req, res) {
        logger.info("Checking the API status: Everything is OK")
        res.status(200).json({
            message: "create simple entpoint"
        })
    }
}