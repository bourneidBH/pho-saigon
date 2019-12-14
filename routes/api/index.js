const router = require('express').Router();
const menuRoutes = require('./menu');

// Book routes
router.use('/menu', menuRoutes);

module.exports = router;