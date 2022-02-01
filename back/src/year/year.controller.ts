import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProblemAddtDto } from './dto/save.request.dto';
import { YearService } from './year.service';

@ApiTags('year')
@Controller('year')
export class YearController {
  constructor(private yearService: YearService) {}

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '2021년에 푼 문제 조회' })
  @Post('/2021')
  async get2021Problems() {
    return await this.yearService.get2021Problems();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '2022년에 푼 문제 조회' })
  @Post('/2022')
  async get2022Problems() {
    return await this.yearService.get2021Problems();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '복습 한 문제 조회' })
  @Post('/reviewed')
  async reviewed() {
    return await this.yearService.reviewed();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '복습 안한 문제 조회' })
  @Post('/notreviewed')
  async notrRviewed() {
    return await this.yearService.notReviewed();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '문제 타입별 조회' })
  @Post('/typecheck/:type(*)')
  async typeProblem(@Param('type') type: string) {
    return await this.yearService.typeProblem(type);
  }

  @Post('/add')
  async addProblems(@Body() body: ProblemAddtDto) {
    return await this.yearService.addProblems(
      body.problemname,
      body.problemtype,
      body.year,
      body.solvedate,
      body.success,
      body.review,
    );
  }
}
