const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employeeController");

// POST - Create Employee
router.post("/company/:companyId/employee", createEmployee);

// GET - Get all employees by company
router.get("/company/:companyId/employee", getEmployees);

// GET - Get employee by ID
router.get("/employee/:id", getEmployeeById);

// PUT - Update employee
router.put("/employee/:id", updateEmployee);

// DELETE - Delete employee
router.delete("/employee/:id", deleteEmployee);

module.exports = router;
