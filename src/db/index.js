import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const dbConnection =  await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
        console.log(`MONGODB CONNECTED!! HOST : ${dbConnection.Connection.host}`);
    } catch (error) {
        console.log("ERROR", error);
        process.exit();
    }
}

export default connectDB