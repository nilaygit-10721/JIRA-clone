const Issue = require('../models/Issue');

// Create a new issue
exports.createIssue = async (req, res) => {
  try {
    const { title, description, type, priority, status, projectId, assignedTo } = req.body;

    const issue = new Issue({
      title,
      description,
      type,
      priority,
      status,
      projectId,
      createdBy: req.userId, // Attach the user ID from the middleware
      assignedTo,
    });

    await issue.save();
    res.status(201).json({ message: 'Issue created successfully', issue });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get all issues for a project
exports.getAllIssues = async (req, res) => {
  try {
    const { projectId } = req.params;
    const issues = await Issue.find({ projectId, createdBy: req.userId }); // Fetch issues for the project created by the logged-in user
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get a single issue by ID
exports.getIssueById = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findOne({ _id: id, createdBy: req.userId }); // Ensure the issue belongs to the user
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Update an issue by ID
exports.updateIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, type, priority, status, assignedTo } = req.body;

    const issue = await Issue.findOneAndUpdate(
      { _id: id, createdBy: req.userId }, // Ensure the issue belongs to the user
      { title, description, type, priority, status, assignedTo },
      { new: true } // Return the updated issue
    );

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.status(200).json({ message: 'Issue updated successfully', issue });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Delete an issue by ID
exports.deleteIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const issue = await Issue.findOneAndDelete({ _id: id, createdBy: req.userId }); // Ensure the issue belongs to the user
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.status(200).json({ message: 'Issue deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};