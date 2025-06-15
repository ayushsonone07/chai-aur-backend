import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// const port = parseInt(process.env.PORT) || 3000;
// app.listen(port, () => {
//     console.log(`Server running at ${port}/`);
// });

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2425876509.
import userRouter from "../src/routes/user.route.js"

app.use("/api/v1/users", userRouter)
export { app }