import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallsController } from './calls/calls.controller';
import { CallsService } from './calls/calls.service';
import { CallsModule } from './calls/calls.module';

@Module({
  imports: [CallsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
