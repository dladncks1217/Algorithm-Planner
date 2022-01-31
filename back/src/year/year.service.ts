import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Problems } from 'src/entities/problems';
import { Repository } from 'typeorm';

@Injectable()
export class YearService {
  constructor(
    @InjectRepository(Problems)
    private problemRepository: Repository<Problems>,
  ) {}
  async get2021Problems() {
    let result = await this.problemRepository.find({
      where: {
        year: 2021,
      },
    });
    return result;
  }

  async get2022Problems() {
    let result = await this.problemRepository.find({
      where: {
        year: 2022,
      },
    });
    return result;
  }

  async addProblems(
    name: string,
    year: number,
    solveDate: string,
    success: string,
    review: string,
  ) {
    try {
      console.log(name);
      await this.problemRepository.save({
        problemname: name,
        year,
        solvedate: solveDate,
        success,
        review,
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
