var mongoose = require('mongoose'); 
const mongoURI = process.env.DATABASE

const connectToMongo = async ()=>{

   await mongoose.connect(mongoURI)
   console.log('connected to mongo successfully!')
}

module.exports= connectToMongo;