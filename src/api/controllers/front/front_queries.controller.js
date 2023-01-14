const queries=require('../../models/query.model')


exports.addQueries=async(req,res,next)=>{
    try {
        const payload = req.body;
        if (!payload)
        {
            return res.status(200).send({status: false, message: "kindly enter Data for query"})
        }
        console.log(payload)
        let result = await Flight.create(payload);
        res.status(200).send({status: true, message: "Flight Added Successfully",result})
    
    } catch (error) {
        res.status(200).send({status: false, message: "Some Error Occured", error})
        next
    }
}
