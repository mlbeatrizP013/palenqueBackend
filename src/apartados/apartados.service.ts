import { Injectable } from '@nestjs/common';
import { CreateApartadoDto } from './dto/create-apartado.dto';
import { UpdateApartadoDto } from './dto/update-apartado.dto';

@Injectable()
export class ApartadosService {
  create(createApartadoDto: CreateApartadoDto) {
    return 'This action adds a new apartado';
  }

  findAll() {
    return `This action returns all apartados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartado`;
  }

  update(id: number, updateApartadoDto: UpdateApartadoDto) {
    return `This action updates a #${id} apartado`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartado`;
  }
}
