const express = require('express');
const Booking = require('../models/Booking');
const Listing = require('../models/Listing');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

// Book a listing
router.post('/', authMiddleware, async (req, res) )=> {
  const { listingId, checkInDate, checkOutDate } = req.body;
  try {
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ msg: 'Listing not found' });
    }
}
}
