import { PickType } from '@nestjs/swagger';
import { Problems } from 'src/entities/Problems';

export class ProblemAddtDto extends PickType(Problems, [
  'problemname',
  'year',
  'solvedate',
  'success',
  'review',
] as const) {}
