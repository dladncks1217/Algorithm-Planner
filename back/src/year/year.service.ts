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

  async reviewed() {
    let result = await this.problemRepository.find({
      where: {
        review: 'true',
      },
    });
    return result;
  }

  async notReviewed() {
    let result = await this.problemRepository.find({
      where: {
        review: 'false',
      },
    });
    return result;
  }

  async typeProblem(type: string) {
    let result = await this.problemRepository.find({
      where: {
        type,
      },
    });
    return result;
  }

  async addProblems(
    problemname: string,
    problemtype: string,
    year: number,
    solvedate: string,
    success: string,
    review: string,
  ) {
    try {
      console.log('asdf');
      let result = await this.problemRepository.save({
        problemname,
        problemtype,
        year,
        solvedate,
        success,
        review,
      });
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
