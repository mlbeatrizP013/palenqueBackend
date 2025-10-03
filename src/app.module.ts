/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeModule } from './home/home.module';
import { ForoModule } from './foro/foro.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'palenque',
      autoLoadEntities: true,
      synchronize: true,
    }),
    HomeModule,
    ForoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
