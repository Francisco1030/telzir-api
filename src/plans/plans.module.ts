import { Module } from '@nestjs/common';

import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { Plan } from './plan.entity';

@Module({
  imports: [Plan],
      controllers: [PlansController],
      providers: [PlansService],
      exports: [PlansService],
})
export class PlansModule {}
