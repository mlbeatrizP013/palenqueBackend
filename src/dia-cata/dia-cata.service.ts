import { Injectable } from '@nestjs/common';
import { CreateDiaCataDto } from './dto/create-dia-cata.dto';
import { UpdateDiaCataDto } from './dto/update-dia-cata.dto';

@Injectable()
export class DiaCataService {
  create(createDiaCataDto: CreateDiaCataDto) {
    return 'This action adds a new diaCata';
  }

  findAll() {
    return `This action returns all diaCata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diaCata`;
  }

  update(id: number, updateDiaCataDto: UpdateDiaCataDto) {
    return `This action updates a #${id} diaCata`;
  }

  remove(id: number) {
    return `This action removes a #${id} diaCata`;
  }
}
