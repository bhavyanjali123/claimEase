const mongoose = require('mongoose');

const ClaimSchema = new mongoose.Schema({
  employeeId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
  expenseName:String,
  amount:Number,
  dateOfExpense:Date,
  pdfPath:String,
  status:{type:String,default:'pending'}
});

module.exports = mongoose.model('Claim',ClaimSchema);
