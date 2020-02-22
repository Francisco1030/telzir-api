import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallsModule } from './calls/calls.module';
import { PlansModule } from './plans/plans.module';

@Module({
  imports: [CallsModule, PlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
