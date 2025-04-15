//import the model
const User = require("../models/user.model");

//bcrypt
const bcrypt = require("bcrypt");
const saltRounds = 10;

//create route handler
exports.createUser = async (req, res) => {
  try {
    //extract info from request body
    const { firstName, lastName, email, password } = req.body;

    bcrypt.hash(password, saltRounds).then(function (hash) {
      // Store hash in your password DB.
      const response = User.create({
        firstName,
        lastName,
        email,
        password: hash,
      })
        .then((user) => {
          // send a json response with a success flag
          res.status(200).json({
            success: true,
            data: { firstName, lastName, email },
            message: "Entry created successfully",
          });
        })
        .catch((err) => {
          console.error("Error creating user", err);
          res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
          });
        });
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};

exports.findAndLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // find account by email
    const getUser = await User.findOne({ email: email });

    if (!getUser) {
      return res.status(500).json({
        success: false,
        message: "Email or password is incorrect",
      });
    }

    // then compare password hash (returns true if match)
    if (bcrypt.compareSync(password, getUser.password)) {
      return res.status(200).json({
        successs: true,
        response: { email, password },
        message: "login successful",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Email or password is incorrect",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "not implemented yet",
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const response = await User.find({});

    res.status(200).json({
      success: true,
      data: response,
      message: "Entire data is fetched",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

//get route handler

exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from database because the request is og get type
    const response = await Todo.find({});

    //response
    res.status(200).json({
      success: true,
      data: response,
      message: "Entire data is fetched",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //fetch id from request parameters
    const id = req.params.id;
    const getTodo = await Todo.findById({ _id: id });

    if (!getTodo) {
      return res.status(404).json({
        success: false,
        message: "No entry with this id is found",
      });
    }
    //return success message
    res.status(200).json({
      success: true,
      data: getTodo,
      message: "Entry fetched successfully",
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "internal server error",
    });
  }
};

//update route handler

exports.updateTodoById = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;

    const updateTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    if (!updateTodo) {
      return res.status(404).json({
        success: false,
        message: "No data entry found with this id",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data Updated Successfully",
      data: updateTodo,
    });
  } catch (error) {
    console.log(error);
    console.error(error);
    res.status(500).json({
      success: false,
      message: "internal server error",
      data: error,
    });
  }
};

//delete route handler

exports.deleteTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const deleteTodo = await Todo.findByIdAndDelete({ _id: id });

    if (!deleteTodo) {
      return res.status(404).json({
        success: false,
        message: `No Data fount with this ${id}`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Entry Deleted Successfully",
      Data: deleteTodo,
    });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).json({
      success: false,
      data: error,
      message: "Internal server error",
    });
  }
};
