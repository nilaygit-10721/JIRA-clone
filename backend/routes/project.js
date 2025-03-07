const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleMiddleware = require('../middleware/roleMiddleware');
const projectController = require('../controllers/projectController');

// Only admins and project managers can create projects
router.post('/', auth, roleMiddleware(['admin', 'project_manager']), projectController.createProject);

// Only admins can delete projects
router.delete('/:id', auth, roleMiddleware(['admin']), projectController.deleteProject);

// All authenticated users can access these routes
router.get('/', auth, projectController.getAllProjects);
router.get('/:id', auth, projectController.getProjectById);
router.put('/:id', auth, projectController.updateProject);

module.exports = router;