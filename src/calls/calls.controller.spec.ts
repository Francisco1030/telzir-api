import { Test, TestingModule } from '@nestjs/testing';
import { CallsController } from './calls.controller';

describe('Calls Controller', () => {
  let controller: CallsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CallsController],
    }).compile();

    controller = module.get<CallsController>(CallsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
