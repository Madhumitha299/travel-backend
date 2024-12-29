const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  location: {
    city: { type: String, required: true },
    country: { type: String, required: true }
  },
  host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  images: [String],
  availableDates: [{ type: Date }]
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;
