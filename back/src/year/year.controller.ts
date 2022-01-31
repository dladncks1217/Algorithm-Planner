import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { YearService } from './year.service';

@ApiTags('year')
@Controller('year')
export class YearController {
  constructor(private yearService: YearService) {}
  @Post('/2021')
  get2021Problems() {
    return this.yearService.get2021Problems();
  }

  @Post('/2022')
  get2022Problems() {
    return this.yearService.get2021Problems();
  }

  @Post('/add')
  async addProblems(@Body() body) {
    return await this.yearService.addProblems(
      body.name,
      body.year,
      body.solveDate,
      body.success,
      body.review,
    );
  }
}
