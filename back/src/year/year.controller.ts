import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProblemAddtDto } from './dto/save.request.dto';
import { YearService } from './year.service';

@ApiTags('year')
@Controller('year')
export class YearController {
  constructor(private yearService: YearService) {}
  @Post('/2021')
  async get2021Problems() {
    return await this.yearService.get2021Problems();
  }

  @Post('/2022')
  async get2022Problems() {
    return await this.yearService.get2021Problems();
  }

  @Post('/reviewed')
  async reviewed() {
    return await this.yearService.reviewed();
  }

  @Post('/notreviewed')
  async notrRviewed() {
    return await this.yearService.notReviewed();
  }

  @Post('/add')
  async addProblems(@Body() body: ProblemAddtDto) {
    return await this.yearService.addProblems(
      body.problemname,
      body.year,
      body.solvedate,
      body.success,
      body.review,
    );
  }
}
