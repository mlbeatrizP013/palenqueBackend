import { IsString, IsNumber, IsUrl } from 'class-validator';

export class CreateInfoHomeDto {
  @IsString()
  historia: string;

  @IsString()
  vision: string;

  @IsUrl()
  imageUrl: string;

  @IsString()
  maestroMezcal: string;

  @IsString()
  mision: string;

  @IsString()
  valores: string;

  @IsString()
  normasProduccion: string;

  @IsNumber()
  numeroContacto: number;

  @IsString()
  ubicacion: string;
}
