import { ID } from "appwrite";

import { INewUser } from "@/types";
import { account } from "./config";

export async function createUserAccount(user: INewUser){
    try{
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.username
        )

        return newAccount;
    }
    catch(err){
        console.log(err);
        return err;
    }
}