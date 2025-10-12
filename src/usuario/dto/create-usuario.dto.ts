
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { DiaCata } from 'src/dia-cata/entities/dia-cata.entity';
export class CreateUsuarioDto {
    @IsString()
    nome: string;

    @IsEmail()
    email: string;

    @IsString()
    telefono: string;

    @IsString()
    genero: string;
    @IsNumber()
    Idcata: DiaCata
}
