// middleware/authtoken.js
import jwt from 'jsonwebtoken';

export const protect = (req, res, next) => {
  const header = req.headers.authorization        
  const token = header?.split(' ')[1]             

  if (!token)                                     
    return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {                                 
    console.log('verify error:', err.message);
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};