const express = require("express");
const router = express.Router();

const {
  createShipment,
  trackShipment,
  getAllShipments,
  updateStatus,
} = require("../controllers/shipmentController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", createShipment);
router.get("/:trackingId", trackShipment);
router.get("/", authMiddleware , getAllShipments);
router.put("/:id", authMiddleware ,  updateStatus);

module.exports = router;
