import dotenv from "dotenv";

dotenv.config();

export const ENV = {
    PORT:process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI,
    CLERK_PUBLISHABLE_KEY:process.env.CLERK_PUBLISHABLE_KEY,
    CLRERK_SECRET_KEY:process.env.CLRERK_SECRET_KEY,
    CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRECT:process.env.CLOUDINARY_API_SECRECT,
    ARCJECT_KEY:process.env.ARCJECT_KEY,

};