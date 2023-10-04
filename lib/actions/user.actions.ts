"use server"

import User from "../models/user.model";
import { connectedToDB } from "../mongoose"

export async function updateUser(
    userId: string,
    username: string,
    name: string,
    bio: string,
    image: string,
    path: string,
    ): Promise<void> {
    connectedToDB();
    
    await User.findOneAndUpdate(
        { id: userId },
        {
            username: username.toLowerCase(),
            name,
            bio,
            image,
            onboarded: true,
        },
        { upsert: true }
    )
}