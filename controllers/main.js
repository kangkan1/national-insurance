exports.index = async(req, res, next) => {
    return res.status(200).send("This is index page")
}