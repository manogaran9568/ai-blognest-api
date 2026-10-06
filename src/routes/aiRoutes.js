const express = require('express');
const router = express.Router();
const { generateDraft, summarizePost } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.post('/generate', protect, generateDraft);
router.post('/summarize', protect, summarizePost);

module.exports = router;
