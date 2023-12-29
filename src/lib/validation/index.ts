import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(4, {message: 'Name is too short'}),
    username: z.string().min(5, {message:'Either too short or incorrect username.'}),
    email: z.string().min(12, {message:"Too Short or Not a Valid email."}),
    password: z.string().min(8, {message: "Password must be atleast 8 characters."}),
});