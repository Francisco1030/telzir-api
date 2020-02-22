import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallsController } from './calls/calls.controller';
import { CallsService } from './calls/calls.service';
import { CallsModule } from './calls/calls.module';
import { PlansController } from './plans/plans.controller';
import { PlansModule } from './plans/plans.module';

@Module({
  imports: [CallsModule, PlansModule],
  controllers: [AppController, PlansController],
  providers: [AppService],
})
export class AppModule {}
