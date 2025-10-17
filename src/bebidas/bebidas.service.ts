import { Injectable } from '@nestjs/common';
import { CreateBebidaDto } from './dto/create-bebida.dto';
import { UpdateBebidaDto } from './dto/update-bebida.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bebida } from './entities/bebida.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BebidasService {
  @InjectRepository(Bebida)
  private readonly bebidaRepository: Repository<Bebida>;

  async create(createBebidaDto: CreateBebidaDto) {
    const bebida = this.bebidaRepository.create(createBebidaDto);
    return await this.bebidaRepository.save(bebida);
  }

  async findAll() {
    return await this.bebidaRepository.find();
  }

  async findOne(id: number) {
    return await this.bebidaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBebidaDto: UpdateBebidaDto) {
    await this.bebidaRepository.update(id, updateBebidaDto);
    return await this.bebidaRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.bebidaRepository.delete(id);
    return `This action removes a #${id} bebida`;
  }
}
