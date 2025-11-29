const jwt = require('jsonwebtoken');

exports.auth = function(req,res,next){
  const token = req.headers.authorization?.split(" ")[1];
  if(!token) return res.status(401).json({msg:"No token"});
  try{
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  }catch(err){
    res.status(401).json({msg:"Invalid token"});
  }
}

exports.managerOnly = function(req,res,next){
  if(req.user.role !== 'manager') return res.status(403).json({msg:"Forbidden"});
  next();
}
