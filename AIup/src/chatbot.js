// src/chatbotData.js
const chatbotResponses = [
  {
    patterns: ["hello", "hi", "hey"],
    responses: ["Hello there!", "Hi!", "Hey, how can I help you?"],
  },
  {
    patterns: ["how are you", "how are you doing"],
    responses: ["I'm a bot, so I don't have feelings, but I'm ready to assist!", "I'm doing great, thanks for asking!"],
  },
  {
    patterns: ["what can you do", "help"],
    responses: ["I can answer basic questions and help you navigate this application.", "I can provide information and assist with simple tasks. What do you need?"],
  },
  {
    patterns: ["write a short story about a cat", "tell me a story"],
    responses: ["Once upon a time, in a cozy little house, lived a fluffy cat named Whiskers. Whiskers loved naps and sunbeams, and spent her days chasing butterflies in the garden. One day, she discovered a secret passage behind the bookshelf... (To be continued!)", "The purr-fect tale begins! A mischievous cat named Luna snuck into the kitchen, eyeing a freshly baked fish. With a flick of her tail, she plotted her delicious heist..."],
  },
  // Add more patterns and responses as needed
  {
    patterns: ["bye", "goodbye", "see you"],
    responses: ["Goodbye!", "See you later!", "Have a great day!"],
  },
];

export default chatbotResponses;