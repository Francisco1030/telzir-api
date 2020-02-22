import { Module } from '@nestjs/common';

import { CallsController } from './calls.controller';
import { CallsService } from './calls.service';
import { Call } from './call.entity';

@Module({
    imports: [Call],
      controllers: [CallsController],
      providers: [CallsService],
})
export class CallsModule {}
