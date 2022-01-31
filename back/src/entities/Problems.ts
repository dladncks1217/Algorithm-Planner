import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ schema: 'AlgoPlanner', name: 'problems' })
export class Problems {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'problemName', length: 30 })
  problemname: string;

  @Column('int', { name: 'year' })
  year: number;

  @Column('varchar', { name: 'solveDate', length: 10 })
  solvedate: string;

  @Column('boolean', { name: 'success' })
  success: boolean;

  @Column('boolean', { name: 'resolve' })
  resolve: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}