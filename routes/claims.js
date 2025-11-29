const router = require('express').Router();
const multer = require('multer');
const Claim = require('../models/Claim');
const {auth,managerOnly} = require('../middleware/auth');
const path = require('path');

const upload = multer({dest:path.join(__dirname,'../uploads')});

router.post('/', auth, upload.single('pdf'), async(req,res)=>{
  const {expenseName,amount,dateOfExpense} = req.body;
  const claim = await Claim.create({
    employeeId:req.user.id,
    expenseName,
    amount,
    dateOfExpense,
    pdfPath:req.file.path
  });
  res.json(claim);
});

router.get('/me', auth, async(req,res)=>{
  const claims = await Claim.find({employeeId:req.user.id});
  res.json(claims);
});

router.get('/', auth, managerOnly, async(req,res)=>{
  const claims = await Claim.find();
  res.json(claims);
});

router.put('/:id/decision', auth, managerOnly, async(req,res)=>{
  const {status} = req.body;
  const c = await Claim.findByIdAndUpdate(req.params.id,{status},{new:true});
  res.json(c);
});

module.exports = router;
