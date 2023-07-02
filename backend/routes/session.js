const express = require('express');
const router = express.Router();
const Session = require('../models/Session');
// Create a new session
router.post('/', async (req, res) => {
    try {
      const { sessionId, context } = req.body;
  
      const session = new Session({ sessionId, context });
      await session.save();
  
      res.status(201).json(session);
    } catch (error) {
      res.status(500).json({ message: 'Error creating session' });
    }
  });

  module.exports = router;