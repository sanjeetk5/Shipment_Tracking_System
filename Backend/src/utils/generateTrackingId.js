

const generateTrackingId = () => {
  return "TRK" + Date.now();
};

module.exports = generateTrackingId;