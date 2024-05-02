import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class UserSignInDto {

    @IsNotEmpty({message: "email cannot be empty."})
    @IsEmail({}, {message: "Please provide a valid email."})
    email: string;

    @IsNotEmpty({message: "Password cannot be empty."})
    @MinLength(6, {message: "Password minimum character should be 6."})
    password: string;
}