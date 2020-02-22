import { Injectable } from '@nestjs/common';
import { Plan } from './plan.entity';

@Injectable()
export class PlansService {

    plans: Plan[] = [
        { id: 1, name: 'FaleMais 30', timeLimit: 30, totalPrice: 0},
        { id: 2, name: 'FaleMais 60', timeLimit: 60, totalPrice: 0},
        { id: 3, name: 'FaleMais 120', timeLimit: 120, totalPrice: 0},
    ];

    findById(id: number) {
        const plan = this.plans.find((value) => value.id == id);
        return plan;
    }
}
