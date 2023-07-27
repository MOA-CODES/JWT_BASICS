const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors/index')

const authenticationMiddleware = async (req, res, next)=>{
    const authheader = req.headers.authorization;

    if(!authheader || !authheader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided') //normal its invalid credentials in text
    }
 
    const token = authheader.split(' ')[1]

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const{id,username} = decoded
        req.user = {id,username}
        next()
    }catch(err){
        throw new UnauthenticatedError('Not authorized to access this route')
    }

 }

 module.exports = authenticationMiddleware