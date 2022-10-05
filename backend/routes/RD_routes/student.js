const express = require("express");
const router = require("express").Router();
let student = require("../../models/RD_models/student");
const validator= require("validator");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const auth = require("../../middleware/auth");

//student signup
router.post("/signup",async (req, res) => {
    try {
      const {
        studentName,
        email,
        pwd,
        NIC,
        phone

      } = req.body;

      let student1 = await student.findOne({ email });
      if (student1) {
        throw new Error("student already exists");
      }

      student1 = {
        studentName : studentName,
        email: email,
        pwd: pwd,
        NIC: NIC,
        phone : phone
 

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
   router.post('/signin', async (req, res) => {
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


//get student profile
router.get("/profile", auth, async (req, res) => {
    try {
      res.status(201)
      res.send({ success: "Student Logged In", Stu: req.Stu });
    } 
      catch (error) {
      res.status(500)
      res.send({ status: "Error with profile", error: error.message });
    }
  });

  
  //log out profile
  router.post("/logout", auth, async (req, res) => {
    try {
      req.Stu.tokens = req.Stu.tokens.filter((token) => {
        return token.token !== req.token;
      });
      await req.Stu.save();
      res.status(200).send("Logout successfully");
    } catch (error) {
      res.status(500).send(error.message);
      console.log(error.message);
    }   
 });

// update student profile
router.put('/update', auth, async (req, res) => {
    try {
      const {
          studentName,
          email,
          phone,
          NIC,
          
        } = req.body;
  
      let Stu = await student.findOne({email})
        
      if (!Stu) {
          throw new Error('There is no student account')
        }
  
        const studentUpdate = await student.findByIdAndUpdate(req.Stu.id, 
          {
            studentName:studentName,
            email:email,
            phone:phone,
            NIC: NIC
            
          })
  
          res.status(200).send({status: 'Student Profile Updated', Stu: studentUpdate})
  
        } catch (error) {
          res.status(500).send({error: error.message})
          console.log(error)
        }
      });
  
      //delete student account
    router.delete("/delete", auth, async (req, res) => {
        try {
          const Stu = await student.findById(req.Stu.id);
          if (!Stu) {
            throw new Error("There is no student to delete");
          }
          const deleteProfile = await student.findByIdAndDelete(req.Stu.id);
          res.status(200).send({ status: "Student deleted", Stu: deleteProfile });
        } catch (error) {
          res
            .status(500)
            .send({ status: "error with /delete/:id", error: error.message });
        }
      });



  module.exports = router;