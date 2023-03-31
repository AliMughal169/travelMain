const User=require('../../models/user.model')

exports.getprofile=async(req, res, next) => {
  const query = req.query
  const result = await User.find(query);
  if (result)
  {
    res.status(200).send({status: true, message: "User Fetched Successfully", result})
  }
  else
  {
    res.status(200).send({status: false, message: "No Such User Found", result})
  }


}

exports.register = async (req, res, next) => {
  const payload = req.body;
    
  console.log(payload)
  let result = await User.create(payload);
  res.status(200).send({status: true, message: "Flight Added Successfully",result})
}