const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const commentController = require('../controllers/commentController');

// Protected routes
router.post('/', auth, commentController.addComment); // Add a comment
router.get('/:issueId', auth, commentController.getCommentsByIssue); // Get all comments for an issue
router.put('/:id', auth, commentController.updateComment); // Update a comment by ID
router.delete('/:id', auth, commentController.deleteComment); // Delete a comment by ID

module.exports = router;