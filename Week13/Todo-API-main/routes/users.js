const express = require('express');
const router = express.Router();

//import controller

const userController = require('../controllers/user.controller');

//define API routes
router.post("/register", userController.createUser);
router.post("/login", userController.findAndLogin);
router.get("/verify", userController.verify)
// router.get("/getTodos", todoController.getTodo);
// router.get("/getTodosById/:id", todoController.getTodoById);
// router.put("/updateTodoById/:id", todoController.updateTodoById);
// router.delete("/deleteTodoById/:id", todoController.deleteTodoById);

module.exports = router; 
