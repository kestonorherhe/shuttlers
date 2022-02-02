import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Client } from "@googlemaps/google-maps-services-js";
import { TimeService } from 'src/helpers/time.service';

@Injectable()
export class ReverseGeocodingService {
    constructor(
        private _timeService: TimeService
    ) { }

    async geocode(id: number): Promise<any> {
        const client = new Client({});

        const entityManager = getManager()

        const travels = await entityManager.query(`SELECT * FROM vehicle_boundary_events WHERE boundary_id = ${id}`);

        // get enter events
        const enterEvents = travels.filter((i) => i.detected_event == 'enter');
        const totalPickups = enterEvents.length;

        // get exit events
        const exitEvents = travels.filter((i) => i.detected_event == 'exit')


        let initTotalTime = [];

        let response;
        enterEvents.forEach(async (el, index) => {
            response = client.distancematrix({
                params: {
                    origins: [`${el.position_latitude},${el.position_longitude}`],
                    destinations: [`${exitEvents[index].position_latitude},${exitEvents[index].position_longitude}`],
                    key: "AIzaSyDhuF7YvGF3Wri9D4ZAKt0BqsqJ2YvyCpM",
                },
                timeout: 1000, // milliseconds
            })
                .then(async (r) => {
                    let time = { time: r.data.rows[0].elements[0].duration.value }
                    initTotalTime = [...initTotalTime, time]
                    const sumTime = initTotalTime.reduce(function (prev, cur) {
                        return prev + cur.time;
                    }, 0);

                    const avgTimeInSecs = await this._timeService.avgTime(sumTime, totalPickups)
                    const minutes = await this._timeService.calcMin(avgTimeInSecs);
                    const seconds = await this._timeService.calcSec(avgTimeInSecs, minutes);
                    const finalTime = await this._timeService.prittier(minutes, seconds);
                    return finalTime;
                })
                .catch((e) => {
                    console.log(e.response.data.error_message);
                });
        });
        return await response;
    }
}
