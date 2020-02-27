import { Module } from '@nestjs/common';

import { CallsController } from './calls.controller';
import { CallsService } from './calls.service';
import { Call } from './call.entity';
import { PlansService } from 'src/plans/plans.service';
import { PlansModule } from 'src/plans/plans.module';

@Module({
    imports: [Call, PlansModule],
      controllers: [CallsController],
      providers: [CallsService],
})
export class CallsModule {}
