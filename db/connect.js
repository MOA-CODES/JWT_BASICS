const mongoose = require('mongoose')

const connectDB = () => {
  try{
    return mongoose.connect(process.env.MONGO_URI).then(()=>console.log('connected to MongoDB'))
  }catch(err){
    console.log(err).then(()=>process.exit(1))
  }
}

module.exports = connectDB
