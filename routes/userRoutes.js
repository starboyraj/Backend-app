const express = require("express");
const { testController } = require("../controllers/userController");
const router = express.Router();
 

router.get("/test", testController);

module.exports = router;