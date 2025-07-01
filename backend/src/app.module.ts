import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import typeormConfig from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env.local',
    load: [typeormConfig],
  }),
  TypeOrmModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const typeOrmConfig = config.get<DataSourceOptions>('typeorm');
      return {
        ...typeOrmConfig,
        autoLoadEntities: true,
      };
    },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
