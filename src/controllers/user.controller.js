import asyncHandeler from "../utils/asyncHandler.js"

const registerUser = asyncHandeler(async (req, res) => {
    res.status(200).json({
        message: "register user"
    })
})

const loginUser = asyncHandeler(async (req, res) => {
    res.status(200).json({
        message: "register user"
    })
})

export { registerUser, loginUser }