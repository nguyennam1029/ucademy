"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose"
import { TCreateUserParams } from "@/app/type";

export default async function createUser(params:TCreateUserParams) {
    try {
        connectToDatabase();
        const newUser = await User.create(params)
        return newUser
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
        
    }
}