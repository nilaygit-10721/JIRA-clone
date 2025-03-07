const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  text: { type: String, required: true },
  issueId: { type: Schema.Types.ObjectId, ref: 'Issue', required: true }, // Link to the Issue
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the comment
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Comment', commentSchema);