const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // Get the token from the request header
    const token = req.headers.authorization.split(' ')[1]; // Format: "Bearer <token>"

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user ID and role to the request object
    req.user = {
      userId: decodedToken.userId,
      role: decodedToken.role,
    };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};