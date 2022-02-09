import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problems } from 'src/entities/problems';
import { ProblemController } from './problem.controller';
import { ProblemService } from './problem.service';

@Module({
  imports: [TypeOrmModule.forFeature([Problems])], // 이렇게 repository가 userService에 인젝션이 됨.
  controllers: [ProblemController],
  providers: [ProblemService],
})
export class ProblemModule {}
