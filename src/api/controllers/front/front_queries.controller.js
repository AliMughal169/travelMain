const queries = require('../../models/query.model')


exports.addQueries = async (req, res, next) => {
    const payload = req.body;
    console.log(payload)
    try {

        if (!payload) {
            return res.status(200).send({ status: false, message: "kindly enter Data for query" })
        }
        console.log(payload)
        let result = await queries.create(payload);
        res.status(200).send({ status: true, message: "Querie Added Successfully", result })

    } catch (error) {
        res.status(200).send({ status: false, message: "Some Error Occured", error })
        // next()
    }
}

