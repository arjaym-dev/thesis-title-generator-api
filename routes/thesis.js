const express = require("express")
const router = express.Router()

const GenerateTitleController = require("../controller/thesis")

router.get("/api/v1/thesis", GenerateTitleController)

module.exports = router
