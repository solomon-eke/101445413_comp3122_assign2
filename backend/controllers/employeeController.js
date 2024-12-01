// controllers/employeeController.js
const Employee = require('../models/employee');

// Create an Employee
const createEmployee = async (req, res) => {
  const { name, position, department } = req.body;

  const newEmployee = new Employee({ name, position, department });
  try {
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: 'Error creating employee' });
  }
};

// Get all Employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching employees' });
  }
};

module.exports = { createEmployee, getEmployees };
