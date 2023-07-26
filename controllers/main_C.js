const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) =>{
    const{username,password} = req.body

    //mongoose validation
    //joi - 3rd party package
    // check in controller

    if(!username || !password){
        throw new CustomAPIError('please provide email and password',400)
    }

    console.log(username ,password)
    res.send('Fake Login/register/signup');
}

const dashboard = async(req, res) =>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:'Hey',secret:`Your lucky number is ${luckyNumber}`})
}

module.exports = {login, dashboard}