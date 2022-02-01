import { PickType } from '@nestjs/swagger';
import { Problems } from 'src/entities/Problems';

export class ProblemAddtDto extends PickType(Problems, [
  'problemname',
  'problemtype',
  'year',
  'solvedate',
  'success',
  'review',
] as const) {}
