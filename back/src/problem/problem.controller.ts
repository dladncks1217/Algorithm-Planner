import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ProblemAddtDto } from '../common/dto/save.request.dto';
import { ProblemService } from './problem.service';

@ApiTags('problem')
@Controller('problem')
export class ProblemController {
  constructor(private problemService: ProblemService) {}

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '전체 문제 조회' })
  @Post('/all')
  async getAllProblems() {
    return await this.problemService.getAllProblems();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '2021년에 푼 문제 조회' })
  @Post('/2021')
  async get2021Problems() {
    return await this.problemService.get2021Problems();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '2022년에 푼 문제 조회' })
  @Post('/2022')
  async get2022Problems() {
    return await this.problemService.get2022Problems();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '복습 한 문제 조회' })
  @Post('/reviewed')
  async reviewed() {
    return await this.problemService.reviewed();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '복습 안한 문제 조회' })
  @Post('/notreviewed')
  async notrRviewed() {
    return await this.problemService.notReviewed();
  }

  @ApiResponse({
    type: ProblemAddtDto,
  })
  @ApiOperation({ summary: '문제 타입별 조회' })
  @Post('/typecheck/:type(*)')
  async typeProblem(@Param('type') problemtype: string) {
    return await this.problemService.typeProblem(problemtype);
  }

  @Post('/add')
  async addProblems(@Body() body: ProblemAddtDto) {
    return await this.problemService.addProblems(
      body.problemname,
      body.site,
      body.problemtype,
      body.year,
      body.solvedate,
      body.success,
      body.review,
    );
  }
}
