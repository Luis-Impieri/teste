import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  constructor(private dataSource: DataSource) {}

  @Get('test-connection')
  async testConnection() {
    try {
      const result = await this.dataSource.query('SELECT * FROM guests');
      console.log('Data:', result);  
      return { success: true, result };
    } catch (error) {
      console.log('Error:', error.message);  
      return { success: false, error: error.message };
    }
  }
}
