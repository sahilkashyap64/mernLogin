const jwt = require("jsonwebtoken");

let verficationToken = (req, res, next) => {
  let token = req.get("Authorization");//headers

  jwt.verify(token, "secret", (err, decoded) => {

    if (err) {
      return res.status(401).json({
        ok: false,
        err
      });
    }

    req.userbd = decoded.userbd;

    next();
  });

};

module.exports = {
  verficationToken
};
