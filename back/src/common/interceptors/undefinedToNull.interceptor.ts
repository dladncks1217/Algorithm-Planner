import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // 컨트롤러 실행 전 부분
    // 전 부분은 로깅같은 것 할때 시간 초 재는 역할로 써먹을 수 있을듯
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data))); // data : 컨트롤러가 리턴해주는 데이터
    // json의 경우 undefined는 인식못하고 null만 인식함
  }
}
