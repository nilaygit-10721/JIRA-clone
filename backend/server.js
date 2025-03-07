require('dotenv').config();
const express = require('express');
const mongodb = require('./config/database');
const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/project');
const issueRoutes = require('./routes/issue');
const commentRoutes = require('./routes/comment'); // Import comment routes

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/issues', issueRoutes);
app.use('/api/comments', commentRoutes); // Mount comment routes at /api/comments

// Database
mongodb.connect();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));