import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { UserSignInDto } from "./user-signin.dto";


export class UserSignUpDto extends UserSignInDto {
    static email(email: any) {
      throw new Error('Method not implemented.');
    }
    @IsNotEmpty({message: 'Name cannot be null.'})
    @IsString({message: "Name should be string."})
    name: string;

   
}