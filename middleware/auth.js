import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.KEY_JWT, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

export function authenticateAdmin(req, res, next) {
  if (req.user && req.user.admin === 1) {
      next();
  } else {
      res.sendStatus(403);
  }
}

