exports.index = async(req, res, next) => {
    return res.status(200).send("This is index page")
}
exports.index2 = async(req, res, next) => {
    return res.status(200).send("This is index2 page")
}
exports.id = async(req, res, next) => {
    return res.status(200).send("This is index page"+req.params.id)
}