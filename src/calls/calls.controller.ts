import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { CallsService } from './calls.service';
import { Call } from './call.entity';

@Controller('calls')
export class CallsController {

    constructor(private callsService: CallsService) {}

    @Post()
    async create(@Body() call: Call): Promise<Call> {
        return this.callsService.create(call);
    }

    @Get()
    async findAll(): Promise<Call[]> {
        return this.callsService.findAll();
    }

    @Get(':source')
    async findBySource(@Param('source') source: string): Promise<Call[]> {
        return this.callsService.findBySource(source);
    }
}
