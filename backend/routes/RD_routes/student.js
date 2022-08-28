const express = require("express");
const router = require("express").Router();
let student = require("../../models/RD_models/student");
const validator= require("validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require("../../middleware/auth");

//student signup
router.post("/student/signup",async (req, res) => {
    try {
      const {
        studentName,
        phone,
        email,
        pwd,
        NIC
      } = req.body;

      let student1 = await student.findOne({ email });
      if (student1) {
        throw new Error("student already exists");
      }

      student1 = {
        studentName : studentName,
        phone : phone,
        email: email,
        pwd: pwd,
        NIC: NIC
      };
    
      const newstudent = new student(student1);
      await newstudent.save();
      const token = await newstudent.generateAuthToken()
      res.status(201).send({ status: "student Member Created", student: newstudent, token: token });
     
      console.log(student1);
    
      } catch (error) {
         console.log(error.message);
         res.status(500).send({error: error.message});
        //  console.log(error)
    }
  });

   //student login
   router.post('/student/signin', async (req, res) => {
    try {
      const {email, pwd} = req.body
      const Stu = await student.findByCredentials(email, pwd)
      const token = await Stu.generateAuthToken()
      res.status(200).send({token: token, Stu: Stu})
  
    } catch (error) {
      res.status(500).send({ error: error.message });
      console.log(error);
    }
  });

  module.exports = router;
