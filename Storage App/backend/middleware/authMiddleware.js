const { mySecretKey } = require("../controllers/authController");
const User = require("../modules/Users");

exports.checkAuth = async(req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ error: "Not logged in!" });
  }

  const [paylod, oldSignature] = token.split(".");
  const jsonPayload = Buffer.from(paylod, "base64url").toString();
  const newSignature = crypto.
  createHash('sha256')
  .update(jsonPayload)
  .update(mySecretKey)
  .digest('base64url');

  if(oldSignature !== newSignature){
    res.clearCookie("token");
    res.status(401).json({ error: "Not logged in!" });
  }else{
    const { id, expiry: expiryTimeInSeconds } = JSON.parse(jsonPayload);
  }

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