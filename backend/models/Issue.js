const mongoose = require('mongoose');
const { Schema } = mongoose;

const issueSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['bug', 'task', 'story'], default: 'task' },
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
  status: { type: String, enum: ['open', 'in_progress', 'resolved', 'closed'], default: 'open' },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true }, // Link to the Project
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // User who created the issue
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' }, // User assigned to the issue
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Issue', issueSchema);