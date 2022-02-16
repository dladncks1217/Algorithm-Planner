import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';
import { Problems } from 'src/entities/problems';

export class CreateInitialData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Problems)
      .values([
        {
          id: 1,
          site: 'PG',
          problemname: '가장 먼 노드',
          problemtype: '그래프',
          year: 2022,
          solvedate: '220113',
          success: '1',
          review: '1',
        },
        {
          id: 1,
          site: 'PG',
          problemname: '문제123',
          problemtype: 'DP',
          year: 2021,
          solvedate: '220113',
          success: '1',
          review: '0',
        },
        {
          id: 1,
          site: 'PG',
          problemname: '문제1232',
          problemtype: '구현',
          year: 2021,
          solvedate: '220113',
          success: '1',
          review: '1',
        },
        {
          id: 1,
          site: 'PG',
          problemname: '문제1233',
          problemtype: '투포인터',
          year: 2021,
          solvedate: '220113',
          success: '1',
          review: '0',
        },
        {
          id: 1,
          site: 'PG',
          problemname: '문제1234',
          problemtype: '백트래킹',
          year: 2021,
          solvedate: '220113',
          success: '1',
          review: '1',
        },
        {
          id: 1,
          site: 'BOJ',
          problemname: '문제12324',
          problemtype: '백트래킹',
          year: 2021,
          solvedate: '220113',
          success: '1',
          review: '0',
        },
        {
          id: 1,
          site: 'BOJ',
          problemname: '문제11234',
          problemtype: '백트래킹',
          year: 2022,
          solvedate: '220113',
          success: '1',
          review: '0',
        },
        {
          id: 1,
          site: 'BOJ',
          problemname: '문제12434',
          problemtype: '백트래킹',
          year: 2022,
          solvedate: '220113',
          success: '1',
          review: '0',
        },
      ])
      .execute();
  }
}
