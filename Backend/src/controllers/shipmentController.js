

const Shipment = require("../models/Shipment");
const generateTrackingId = require("../utils/generateTrackingId");

// Create Shipment
exports.createShipment = async (req, res) => {
  try {
    const { sender, receiver, origin, destination } = req.body;

    const trackingId = generateTrackingId();

    const shipment = new Shipment({
      trackingId,
      sender,
      receiver,
      origin,
      destination,
      history: [
        {
          status: "Pending",
          location: origin,
        },
      ],
    });

    await shipment.save();

    res.status(201).json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Track Shipment
exports.trackShipment = async (req, res) => {
  try {
    const shipment = await Shipment.findOne({
      trackingId: req.params.trackingId,
    });

    if (!shipment) {
      return res.status(404).json({ message: "Not found" });
    }

    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Shipments (Admin Dashboard)
exports.getAllShipments = async (req, res) => {
  try {
    const { status, search } = req.query;

    let query = {};

    // Filter by status
    if (status) {
      query.status = status;
    }

    // Search by trackingId
    if (search) {
      query.trackingId = { $regex: search, $options: "i" };
    }

    const shipments = await Shipment.find(query).sort({ createdAt: -1 });

    res.json(shipments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Status
exports.updateStatus = async (req, res) => {
  try {
    const { status, location } = req.body;

    const shipment = await Shipment.findById(req.params.id);

    if (!shipment) {
      return res.status(404).json({ message: "Not found" });
    }

    shipment.status = status;

    shipment.history.push({
      status,
      location,
    });

    await shipment.save();

    res.json(shipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};