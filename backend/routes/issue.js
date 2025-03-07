const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const issueController = require('../controllers/issueController');

// Protected routes
router.post('/', auth, issueController.createIssue);
router.get('/:projectId', auth, issueController.getAllIssues); // Get all issues for a project
router.get('/:id', auth, issueController.getIssueById); // Get a single issue by ID
router.put('/:id', auth, issueController.updateIssue); // Update an issue by ID
router.delete('/:id', auth, issueController.deleteIssue); // Delete an issue by ID

module.exports = router;