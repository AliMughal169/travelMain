const queries=require('../../models/query.model')


exports.allQueries=async(req,res,next)=>{
    try {
        const result=await queries.find()
        if (!result)
        {
            res.status(200).send({status: true, message: "There Is No Data to Display", result})

        }
        res.status(200).send({status: true, message: "All Queries Fetched Successfully", result})


    } catch (error) {
        res.status(404).send({status: false, message: "Some Error Occured", error})
        next
    }
}
exports.removeQuery=async(req,res,next)=>{

    try {
        var id=req.query
        const result=await queries.deleteOne(id)
        res.status(200).send({status: true,message:"Query Deleted Succesfully", result})
    } catch (error) {
        res.status(404).send({status: false, message: "Some Error Occured", error})
        next
    }
}