require('dotenv').config();
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const generateBlogDraft = async (prompt, topic) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash-lite',
    contents: `Write a well-structured blog post about "${topic}". Additional guidelines: ${prompt || 'Make it informative and engaging.'}`
  });
  return response.text;
};

const generateBlogSummary = async (content) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3.5-flash-lite',
    contents: `Summarize the following blog content in 2-3 concise sentences:\n\n${content}`
  });
  return response.text;
};

module.exports = { generateBlogDraft, generateBlogSummary };