
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateUsuarioDto {
    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @IsString()
    telefono: string;

    @IsString()
    genero: string;
}
