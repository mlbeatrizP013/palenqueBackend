import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiaCataService } from './dia-cata.service';
import { CreateDiaCataDto } from './dto/create-dia-cata.dto';
import { UpdateDiaCataDto } from './dto/update-dia-cata.dto';

@Controller('dia-cata')
export class DiaCataController {
  constructor(private readonly diaCataService: DiaCataService) {}

  @Post()
  create(@Body() createDiaCataDto: CreateDiaCataDto) {
    return this.diaCataService.create(createDiaCataDto);
  }

  @Get()
  findAll() {
    return this.diaCataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diaCataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiaCataDto: UpdateDiaCataDto) {
    return this.diaCataService.update(+id, updateDiaCataDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diaCataService.remove(+id);
  }
}
