import asyncHandeler from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { User } from "../models/users.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const registerUser = asyncHandeler(async (req, res) => {
    // Get user details from Frontend 
    const { username, fullname, email, password } = req.body;

    // Validate no empty
    if([username, fullname, email, password].some((item) => item?.trim() === "")){
        throw new ApiError(400, "All fields are required")
    }
    // validate user alreday exist
    const userExist = await User.findOne(
        {
            $or: [{email}, {username}]
        })
    if(userExist){
        throw new ApiError(400, "User already exist")
    }

    // check images check for avatar
    const avatarLocalpath = req.files?.avatar[0]?.path;
    const coverimageLocalpath = req.files?.coverimage[0]?.path;

    if(!avatarLocalpath){
        throw new ApiError(400, "Avatar File is required!")
    }
    
    // upload to cloudinary, avatar
    const avatar = await uploadOnCloudinary(avatarLocalpath);
    const coverimage = await uploadOnCloudinary(coverimageLocalpath);

    if(!avatar){
        throw new ApiError(400, "Avatar file is required!")
    }

    // create user object
    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverimage: coverimage?.url || "",
        email,
        password,
        username: username.toLowerCase()
    })

    // remove password and refresh token
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken" //minus - these fields select method
    )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering user!")
    }

    // return response 
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Created Sucessfully!")
    )
})

const loginUser = asyncHandeler(async (req, res) => {
    res.status(200).json({
        message: "login user"
    })
})

export { registerUser, loginUser }