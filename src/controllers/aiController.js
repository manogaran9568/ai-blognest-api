const { generateBlogDraft, generateBlogSummary } = require('../services/geminiService');

const generateDraft = async (req, res, next) => {
  try {
    const { topic, prompt } = req.body;
    if (!topic) return res.status(400).json({ message: 'Topic is required' });

    const draft = await generateBlogDraft(prompt, topic);
    res.json({ draft });
  } catch (err) {
    next(err);
  }
};

const summarizePost = async (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content) return res.status(400).json({ message: 'Content is required' });

    const summary = await generateBlogSummary(content);
    res.json({ summary });
  } catch (err) {
    next(err);
  }
};

module.exports = { generateDraft, summarizePost };
