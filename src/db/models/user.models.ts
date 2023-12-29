import mongoose from "mongoose";

type User = {
    name:string;
    age:number;
    place:string;
}

const userData = new mongoose.Schema<User>({
    name:String,
    age:Number,
    place:String
})

const users = mongoose.model("users",userData)

export {users}
