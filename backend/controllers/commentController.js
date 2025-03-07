const Comment = require('../models/Comment');

// Add a comment to an issue
exports.addComment = async (req, res) => {
  try {
    const { text, issueId } = req.body;

    const comment = new Comment({
      text,
      issueId,
      createdBy: req.userId, // Attach the user ID from the middleware
    });

    await comment.save();
    res.status(201).json({ message: 'Comment added successfully', comment });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get all comments for an issue
exports.getCommentsByIssue = async (req, res) => {
  try {
    const { issueId } = req.params;
    const comments = await Comment.find({ issueId }).populate('createdBy', 'username'); // Fetch comments and populate the createdBy field with the username
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Update a comment by ID
exports.updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const comment = await Comment.findOneAndUpdate(
      { _id: id, createdBy: req.userId }, // Ensure the comment belongs to the user
      { text },
      { new: true } // Return the updated comment
    );

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.status(200).json({ message: 'Comment updated successfully', comment });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Delete a comment by ID
exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await Comment.findOneAndDelete({ _id: id, createdBy: req.userId }); // Ensure the comment belongs to the user
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};