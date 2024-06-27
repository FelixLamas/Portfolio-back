const jwt = require("jsonwebtoken");

function isAuth(req, res, next) {
  const auth = req.get("Authorization");

  if (!auth) {
    return res.status(401).json({ message: "No Autorizado" });
  }

  try {
    const token = auth.split(" ")[1];
    const decodeToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodeToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalido y/o vencido" });
  }
}


module.exports = { isAuth };