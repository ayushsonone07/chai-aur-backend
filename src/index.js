import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});
connectDB();

// (async () => {
//     try{
//         await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
//         app.on("ERROR", (error) => {
//             console.log("ERROR", error);
//             throw error
//         })

//     app.listen(process.env.PORT, () => {
//         console.log(`Listening on port ${process.env.PORT}`)
//     })
//     }catch(error){
//         console.log("ERROR", error)
//         throw error
//     }
// })()