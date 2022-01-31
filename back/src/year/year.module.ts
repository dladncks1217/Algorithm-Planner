import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Problems } from 'src/entities/problems';
import { YearController } from './year.controller';
import { YearService } from './year.service';

@Module({
  imports: [TypeOrmModule.forFeature([Problems])], // 이렇게 repository가 userService에 인젝션이 됨.
  controllers: [YearController],
  providers: [YearService],
})
export class YearModule {}
