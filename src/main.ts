import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de límites de tamaño
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  // 👇 1. CORS CONFIGURADO PARA ACEPTAR A TU APP
  // Esto permite explícitamente cualquier origen (*), vital para Ionic/Capacitor.
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // 👇 2. EL CAMBIO MÁS IMPORTANTE
  // Agregamos '0.0.0.0' para que escuche conexiones desde fuera de tu PC (tu celular)
  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
  
  console.log(`🚀 Servidor corriendo en: await app.getUrl()`);
}
bootstrap();