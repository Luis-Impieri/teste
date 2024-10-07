import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { DataSource } from 'typeorm';

describe('AppController', () => {
  let appController: AppController;
  let dataSourceMock: Partial<DataSource>;

  beforeEach(async () => {
    dataSourceMock = {
      query: jest.fn().mockResolvedValue([{ '?column?': 1 }]),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [{ provide: DataSource, useValue: dataSourceMock }],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  it('should return success on test connection', async () => {
    const result = await appController.testConnection();
    expect(result).toEqual({ success: true, result: [{ '?column?': 1 }] });
  });

  it('should handle errors on test connection', async () => {
    jest.spyOn(dataSourceMock, 'query').mockRejectedValue(new Error('Connection error'));
    const result = await appController.testConnection();
    expect(result).toEqual({ success: false, error: 'Connection error' });
  });
});
