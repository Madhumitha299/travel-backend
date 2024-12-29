const express = require('express');
const Listing = require('../models/Listing');
const authMiddleware = require('../utils/authMiddleware');
const router = express.Router();

// Create a new listing
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, pricePerNight, location, images, availableDates } = req.body;
  try {
    const listing = new Listing({
      title,
      description,
      pricePerNight,
      location,
      host: req.user.userId,
      images,
      availableDates
    });
    await listing.save();
    res.status(201).json(listing);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find().populate('host', 'name email');
    res.json(listings);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get a single listing by ID
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('host', 'name email');
    if (!listing) {
      return res.status(404).json({ msg: 'Listing not found' });
    }
    res.json(listing);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
