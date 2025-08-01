import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadOnCloudinary(filePath){
    try {
        const result = await cloudinary.uploader.upload(filePath);
        fs.unlinkSync(filePath);
        return result;
    } catch (error) {
        console.log("Failed on uploading on cloudinary : ", error)
    }
}