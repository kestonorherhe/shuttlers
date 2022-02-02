import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeService {
    constructor() { }

    async avgTime(time, busStops) {
        const res = Math.floor(time / busStops)
        return res;
    }

    async calcMin(timeInSecs) {
        const res = Math.floor(timeInSecs / 60);
        return res;
    }

    async calcSec(timeInSecs, minutes) {
        const res = timeInSecs - minutes * 60
        return res;
    }

    async prittier(minutes, seconds) {
        return this.str_pad_left(minutes,'0',2) + ' ' + 'mins' +':'+this.str_pad_left(seconds,'0',2) + ' ' + 'secs'
    }

    str_pad_left(string, pad, length) {
        return (new Array(length + 1).join(pad) + string).slice(-length);
    }
}
