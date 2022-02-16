import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from 'middlewares/logger.middlewares';
import { Problems } from './entities/problems';
import { ProblemController } from './problem/problem.controller';
import { ProblemModule } from './problem/problem.module';
import * as ormconfig from '../ormconfig';
import { ProblemService } from './problem/problem.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProblemModule,
    Problems,
    TypeOrmModule.forRoot(ormconfig),
    TypeOrmModule.forFeature([Problems]), // 추가
  ],
  controllers: [AppController, ProblemController],
  providers: [AppService, ProblemService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
