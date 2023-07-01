const { Schema, model } = require('mongoose');

const sessionSchema = new Schema(
  {
    sessionId: {
      type: String,
      required: true,
      unique: true,
    },
    context: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Session = model('Session', sessionSchema);

module.exports = Session;
