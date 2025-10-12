import { IsNotEmpty, IsNumber, isNumber, IsString } from "class-validator";

export class CreateDiaCataDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    fecha: Date;

    @IsNotEmpty()
    @IsNumber()
    capacidad: number;

    @IsNotEmpty()
    @IsNumber()
    costo: number;
    @IsNotEmpty()
    estado: boolean;

}
