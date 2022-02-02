import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeService } from 'src/helpers/time.service';
import { ReverseGeocodingController } from './reverse-geocoding.controller';
import { ReverseGeocodingService } from './reverse-geocoding.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([]),
  ],
  providers: [ReverseGeocodingService, TimeService],
  controllers: [ReverseGeocodingController]
})
export class ReverseGeoCodingModule {}