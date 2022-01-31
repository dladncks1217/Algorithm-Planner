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
    success: boolean,
    resolve: boolean,
  ) {
    try {
      console.log(name);
      await this.problemRepository.save({
        name,
        year,
        solveDate,
        success,
        resolve,
      });
    } catch (e) {
      console.error(e);
      return e;
    }
  }
}
