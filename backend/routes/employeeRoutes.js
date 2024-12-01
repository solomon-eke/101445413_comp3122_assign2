// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { createEmployee, getEmployees } = require('../controllers/employeeController');

// Create Employee (requires JWT)
router.post('/', verifyToken, createEmployee);

// Get Employees (requires JWT)
router.get('/', verifyToken, getEmployees);

module.exports = router;
