const User = require("../modules/Users");

exports.checkAuth = async(req, res, next) => {
  const { token } = req.signedCookie;
  if (!token) {
    res.clearCookie("token");
    return res.status(401).json({ error: "Not logged in!" });
  }

  const {id, expiry: expiryTimeInSeconds} = JSON.parse(token);
  const currentTimeInSeconds = Math.round(Date.now() / 1000);

  if (currentTimeInSeconds > expiryTimeInSeconds) {
    res.clearCookie("token");
    return res.status(401).json({ error: "Not logged in!" });
  }

  const user = await User.findOne({ _id: id }).lean();
  if (!user) {
    return res.status(401).json({ error: "Not logged in!" });
  }
  req.user = user;
  next();
}