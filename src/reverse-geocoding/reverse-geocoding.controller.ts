import { Controller, Get, Param } from '@nestjs/common';
import { ReverseGeocodingService } from './reverse-geocoding.service';

@Controller('geocode')
export class ReverseGeocodingController {
    constructor(private _reverseGeocoding: ReverseGeocodingService) { }

    @Get(":id")
    async reverseGeocode(@Param('id') id: number): Promise<any> {
        const geocode = await this._reverseGeocoding.geocode(id);
        return geocode;
    }
}
