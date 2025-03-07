const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User who created the project
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Array of users assigned to the project
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);