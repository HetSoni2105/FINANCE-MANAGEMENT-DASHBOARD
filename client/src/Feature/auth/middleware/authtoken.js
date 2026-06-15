import jwt from 'jsonwebtoken'

export const protect = (req, res,next) => {
    const header = req.header.authorization
    const token = header?.spli(' ')[1]

    if (token) return res.status(401).json({error: "no token provided"})

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        req.userid = decode.id;
        next();
    }catch{
        res.status(401).json({error: "Invalid or expired token"});
    }
}