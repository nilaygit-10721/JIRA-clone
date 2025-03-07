const Project = require('../models/Project');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    // Ensure createdBy is set from the authenticated user
    const project = new Project({
      name,
      description,
      createdBy: req.user.userId, // Use req.user.userId from the auth middleware
    });

    await project.save();
    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ createdBy: req.user.userId }); // Fetch projects created by the logged-in user
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get a single project by ID
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id, createdBy: req.user.userId }); // Ensure the project belongs to the user
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Update a project by ID
exports.updateProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId }, // Ensure the project belongs to the user
      { name, description },
      { new: true } // Return the updated project
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Delete a project by ID
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.params.id, createdBy: req.user.userId }); // Ensure the project belongs to the user
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};