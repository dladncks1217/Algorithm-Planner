import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Problems } from './entities/problems';
import { YearController } from './year/year.controller';
import { YearModule } from './year/year.module';
import * as ormconfig from '../ormconfig';
import { YearService } from './year/year.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    YearModule,
    Problems,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Problems]), // 추가
  ],
  controllers: [AppController, YearController],
  providers: [AppService, YearService],
})
export class AppModule {}
