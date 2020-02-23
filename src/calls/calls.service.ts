import { Injectable } from '@nestjs/common';

import { Call } from './call.entity';

@Injectable()
export class CallsService {

    calls: Call[] = [
        { source: '011', destiny: '016', time: 0, price: 1.90, totalPrice: 0},
    ];

    create(call: Call) {
        const newCall = new Call();
        newCall.source = call.source;
        newCall.destiny = call.destiny;
        newCall.time = call.time;
        newCall.price = call.price;
        newCall.totalPrice = call.totalPrice;

        return newCall;
    }
}
