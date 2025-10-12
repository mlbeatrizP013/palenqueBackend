import { IsNotEmpty } from "class-validator";

export class CreateInfoHomeDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    content: string;
    @IsNotEmpty()
    imageUrl: string
    @IsNotEmpty()
    createdAt: Date;
    
}
