import { PickType } from '@nestjs/swagger';
import { Problems } from 'src/entities/Problems';

export class ProblemAddtDto extends PickType(Problems, [
  'problemname',
  'site',
  'problemtype',
  'year',
  'solvedate',
  'success',
  'review',
] as const) {}
