import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import DatabaseConfig from './config/database.config';
import { ScheduleModule } from '@nestjs/schedule';
import { ReverseGeoCodingModule } from './reverse-geocoding/reverse-geocoding.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(DatabaseConfig),
    TypeOrmModule.forFeature([
    ]),
    ReverseGeoCodingModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
