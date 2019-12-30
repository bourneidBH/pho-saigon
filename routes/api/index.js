const router = require('express').Router();
const menuRoutes = require('./menu');

// Menu routes
router.use('/menu', menuRoutes);

module.exports = router;