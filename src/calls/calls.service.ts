import { Injectable } from '@nestjs/common';

import { Call } from './call.entity';
import { async } from 'rxjs/internal/scheduler/async';

@Injectable()
export class CallsService {

    calls: Call[] = [
        { source: '011', destiny: '016', time: 0, price: 1.90, totalPrice: 0 },
        { source: '011', destiny: '017', time: 0, price: 1.70, totalPrice: 0 },
        { source: '011', destiny: '018', time: 0, price: 0.90, totalPrice: 0 },
        { source: '016', destiny: '011', time: 0, price: 2.90, totalPrice: 0 },
        { source: '017', destiny: '011', time: 0, price: 2.70, totalPrice: 0 },
        { source: '018', destiny: '011', time: 0, price: 1.90, totalPrice: 0 },
    ];

    create(call: Call) {
        const newCall = new Call();
        newCall.source = call.source;
        newCall.destiny = call.destiny;
        newCall.time = call.time;
        newCall.price = call.price;
        newCall.totalPrice = call.totalPrice;

        this.calls.push(newCall);

        return newCall;
    }

    findAll() {
        return this.calls;
    }

    findBySource(source: string) {
        const newCalls = new Array<Call>();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.calls.length; i++) {
            if (this.calls[i].source === source) {
                newCalls.push(this.calls[i]);
            }
        }
        return newCalls;
    }
}
