import { IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";


export class CreateProductDto {
    @IsNotEmpty({message: 'Title cannot be blank.'})
    @IsString()
    title: string;

    @IsNotEmpty({message: 'Description cannot be empty.'})
    @IsString()
    description: string;

    @IsNotEmpty({message: 'Price should not be empty.'})
    @IsNumber({maxDecimalPlaces: 2}, {message: 'Price should be number & max decimal precission 2'})
    @IsPositive({message: 'Price should be positive number'})
    price: number;

    @IsNotEmpty({message: 'Stock should not be empty.'})
    @IsNumber({}, {message: 'Stock should be number.'})
    @Min(0, {message: 'Stock cannot be negative.'})
    stock: number;

    @IsNotEmpty({message: 'Images should not be empty.'})
    @IsArray({message: 'Image should be in array format.'})
    images: string[];

    @IsNotEmpty({message: 'Category should not be empty.'})
    @IsNumber({}, {message: 'Category id should be a number.'})
    categoryId: number;
}
