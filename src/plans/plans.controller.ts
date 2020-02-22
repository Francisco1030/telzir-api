import { Controller, Get, Param } from '@nestjs/common';
import { PlansService } from './plans.service';
import { Plan } from './plan.entity';

@Controller('plans')
export class PlansController {
    constructor(private plansService: PlansService) {}

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Plan> {
        const plan = this.plansService.findById(id);
        plan.totalPrice = 30.3 + 10;
        return plan;
    }
}
