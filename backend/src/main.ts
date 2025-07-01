import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
  });

  const dataSource = app.get(DataSource);
  try {
    await dataSource.query('SELECT 1');
    console.log('✅ PostgreSQL conectado correctamente');
  } catch (error) {
    console.error('❌ Error de conexión a PostgreSQL:', error.message);
  }

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();