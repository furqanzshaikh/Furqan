import mongoose from "mongoose"
const ConnectToDb = async()=>{
    try {

     const connection= await  mongoose.connect(process.env.MONGODB_URI)
        console.log(`database connected :${connection.connection.host}`)
    } catch (error) {
        console.error(`Error : ${error.message}`)
        process.exit(1)
    }
}

export default ConnectToDb