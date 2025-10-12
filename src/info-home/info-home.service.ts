import { Injectable } from '@nestjs/common';
import { CreateInfoHomeDto } from './dto/create-info-home.dto';
import { UpdateInfoHomeDto } from './dto/update-info-home.dto';

@Injectable()
export class InfoHomeService {
  create(createInfoHomeDto: CreateInfoHomeDto) {
    return 'This action adds a new infoHome';
  }

  findAll() {
    return `This action returns all infoHome`;
  }

  findOne(id: number) {
    return `This action returns a #${id} infoHome`;
  }

  update(id: number, updateInfoHomeDto: UpdateInfoHomeDto) {
    return `This action updates a #${id} infoHome`;
  }

  remove(id: number) {
    return `This action removes a #${id} infoHome`;
  }
}
