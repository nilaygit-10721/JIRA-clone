const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role; // Attached by the auth middleware
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Access denied' });
      }
  
      next();
    };
  };
  
  module.exports = roleMiddleware;