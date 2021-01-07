module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.send("User not found");
}