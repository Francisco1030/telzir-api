import { Injectable } from '@nestjs/common';

import { Call } from './call.entity';
import { PlansService } from 'src/plans/plans.service';

@Injectable()
export class CallsService {

    constructor(private plansService: PlansService) { }

    calls: Call[] = [
        { source: '011', destiny: '016', time: 0, price: 1.90, totalPrice: 0, totalPricePlan: 0, planId: 0 },
        { source: '011', destiny: '017', time: 0, price: 1.70, totalPrice: 0, totalPricePlan: 0, planId: 0 },
        { source: '011', destiny: '018', time: 0, price: 0.90, totalPrice: 0, totalPricePlan: 0, planId: 0 },
        { source: '016', destiny: '011', time: 0, price: 2.90, totalPrice: 0, totalPricePlan: 0, planId: 0 },
        { source: '017', destiny: '011', time: 0, price: 2.70, totalPrice: 0, totalPricePlan: 0, planId: 0 },
        { source: '018', destiny: '011', time: 0, price: 1.90, totalPrice: 0, totalPricePlan: 0, planId: 0 },
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

    calculatePrice(call: Call) {
        const newCall = call;

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.calls.length; i++) {
            if (call.source == this.calls[i].source && call.destiny == this.calls[i].destiny) {
                newCall.price = this.calls[i].price;
            }
        }
        newCall.totalPrice = (newCall.time * newCall.price);

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.plansService.plans.length; i++) {
            if (this.plansService.plans[i].id == call.planId) {
                if (call.time > this.plansService.plans[i].timeLimit) {
                    const realTime = newCall.time - this.plansService.plans[i].timeLimit;
                    newCall.totalPricePlan = (realTime * newCall.price * 1.1);
                } else {
                    newCall.totalPricePlan = this.plansService.plans[i].totalPrice;
                }
            }
        }

        return newCall;
    }

}
