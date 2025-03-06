"use server"



import { TCreateUserParams } from "@/app/type";
import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";

export default async function createUser(params:TCreateUserParams) {
    try {
        connectToDatabase();
        const newUser = await User.create(params)
        console.log("🚀 ~ createUser ~ newUser:", newUser)
        return newUser
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
        
    }
}