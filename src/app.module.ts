import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AdministradorModule } from './administrador/administrador.module';
import { CategoriaModule } from './categoria/categoria.module';
import { BebidasModule } from './bebidas/bebidas.module';
import { DiaCataModule } from './dia-cata/dia-cata.module';
import { InfoHomeModule } from './info-home/info-home.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'palenque',
    autoLoadEntities: true,
    synchronize: true,
  }), UsuarioModule, AdministradorModule, CategoriaModule, BebidasModule, DiaCataModule, InfoHomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
