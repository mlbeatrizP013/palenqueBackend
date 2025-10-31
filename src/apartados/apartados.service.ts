/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateApartadoDto } from './dto/create-apartado.dto';
import { UpdateApartadoDto } from './dto/update-apartado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Apartado } from './entities/apartado.entity';
import { Repository, DeepPartial } from 'typeorm';

@Injectable()
export class ApartadosService {
  @InjectRepository(Apartado)
  private readonly apartadoRepository: Repository<Apartado>;

  async create(createApartadoDto: CreateApartadoDto) {
    const { usuarioID, bebidasID, ...rest } = createApartadoDto;

    const apartado = this.apartadoRepository.create({
      ...rest,
      ...(usuarioID && { usuarioID: { id: usuarioID } }),
      ...(bebidasID && { bebidasID: { id: bebidasID } }),
    });

    await this.apartadoRepository.save(apartado);
    return apartado;
  }

  async findAll() {
    return this.apartadoRepository.find();
  }

  async findOne(id: number) {
    return this.apartadoRepository.findOneBy({ id });
  }

  async update(id: number, updateApartadoDto: UpdateApartadoDto) {
    const { usuarioID, bebidasID, ...rest } = updateApartadoDto;

    const updatePayload: DeepPartial<Apartado> = { ...rest };
    
    if (usuarioID) {
      updatePayload.usuarioID = { id: usuarioID };
    }
    if (bebidasID) {
      updatePayload.bebidasID = { id: bebidasID };
    }

    await this.apartadoRepository.update(id, updatePayload);
    return this.apartadoRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.apartadoRepository.delete(id);
    return `This action removes a #${id} apartado`;
  }
}