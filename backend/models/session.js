const { Schema, model } = require('mongoose');

const conversationSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const sessionSchema = new Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
    },
    conversation: [conversationSchema],
  },
  { timestamps: true }
);

const Session = model('Session', sessionSchema);

module.exports = Session;
