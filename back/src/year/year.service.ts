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

  async addProblems(
    problemname: string,
    year: number,
    solvedate: string,
    success: string,
    review: string,
  ) {
    try {
      await this.problemRepository.save({
        problemname,
        year,
        solvedate,
        success,
        review,
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
