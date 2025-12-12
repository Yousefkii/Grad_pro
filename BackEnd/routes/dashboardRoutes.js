const express = require("express");
const {protect} = require("../middleware/authMiddleware");
const {getDashboardDate} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", protect, getDashboardDate);


module.exports = router;