import { Controller, Post, Body } from '@nestjs/common';

import { CallsService } from './calls.service';
import { Call } from './call.entity';

@Controller('calls')
export class CallsController {

    constructor(private callsService: CallsService) {}

    @Post()
    async create(@Body() call: Call): Promise<Call> {
        return this.callsService.create(call);
    }
}
