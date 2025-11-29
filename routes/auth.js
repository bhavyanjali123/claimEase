const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async(req,res)=>{
  const {name,email,password,role} = req.body;
  const hash = await bcrypt.hash(password,10);
  const u = await User.create({name,email,passwordHash:hash,role});
  res.json(u);
});

router.post('/login', async(req,res)=>{
  const {email,password} = req.body;
  const u = await User.findOne({email});
  if(!u) return res.status(400).json({msg:"User not found"});
  if(!await bcrypt.compare(password,u.passwordHash)) return res.status(400).json({msg:"Wrong password"});
  const token = jwt.sign({id:u._id,role:u.role},process.env.JWT_SECRET);
  res.json({token,user:u});
});

module.exports = router;
