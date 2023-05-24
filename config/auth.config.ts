const jwt = require("jsonwebtoken");

module.exports = {
  validateToken: (req: any, res: any, next: any) => {
    const authorizationHeaader = req.headers;

    let result;
    if (authorizationHeaader) {
      const token = req.headers.authorization; // Bearer <token>
      const options = {
        expiresIn: 129600,
      };
      try {
        // verify makes sure that the token hasn't expired and has been issued by us
        result = jwt.verify(token, "keyboard cat 4 ever", options);
        // Let's pass back the decoded token to the request object
        req.decoded = result;
        // We call next to pass execution to the subsequent middleware
        next();
      } catch (err) {
        // Throw an error just in case anything goes wrong with verification
        console.log(err);
      }
    } else {
      result = {
        error: `Authentication error. Token required.`,
        status: 401,
      };
      res.status(401).send(result);
    }
  },
};
