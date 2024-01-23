const NotFound = async(req,res) => {
    return res.status(404).json({success : false , msg : `route ${req.originalUrl} does not exist !`})
}











module.exports = {
    NotFound
};
