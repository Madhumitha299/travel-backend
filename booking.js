const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  listing: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  checkInDate: { type: Date, required: true },
  checkOutDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
