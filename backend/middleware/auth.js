const jwt = require("jsonwebtoken");
const config = require("config");
const student = require("../models/RD_models/student");

const auth = async (req, res, next) => {
    try {
      const token = req.header("Authorization");
      const decode = jwt.verify(token, "jwtSecret");
      const Stu = await student.findOne({ _id: decode._id, "tokens.token": token });
      if (!Stu) {
        throw new Error("Please Authenticated");
      }
  
      req.token = token;
      req.Stu = Stu;
      next();
      
    } catch (error) {
      res.status(401).send({ message: error.message });
      console.log("Error in auth.js middleware ", error.message);
    }
  };
  
  module.exports = auth;
  