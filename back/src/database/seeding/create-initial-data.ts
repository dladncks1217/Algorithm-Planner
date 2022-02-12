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
          site: '프로그래머스',
          problemname: '가장 먼 노드',
          problemtype: '그래프',
          year: 2022,
          solvedate: '220113',
          success: '1',
          review: '0',
        },
      ])
      .execute();
  }
}
