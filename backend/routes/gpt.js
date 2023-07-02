const express = require('express');
const router = express.Router();
const {generateResponse} = require('../gpt')

// POST /gpt
router.post('/', async (req, res) => {
  try {
    const { sessionId, message } = req.body;
    console.log(message);
    const response = await generateResponse(sessionId, message);
    res.json({ reply: response });
  } catch (error) {
    res.status(500).json({ message: 'Error generating GPT-3 response' + error });
  }
});

module.exports = router;
