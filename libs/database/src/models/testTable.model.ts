import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  Table,
} from 'sequelize-typescript';

import ModelWithPk from './modelWithPk.model';
import TestTableOne from './testTableOne.model';
import TestTableTwo from './testTableTwo.model';

@Table({
  tableName: 'test_table',
  underscored: true,
  timestamps: false,
})
export default class TestTable extends ModelWithPk {
  @AllowNull(true)
  @Column(DataType.STRING)
  name: string;

  @HasMany(() => TestTableOne, { onDelete: 'CASCADE' })
  public testsOne: TestTableOne[];

  @HasMany(() => TestTableTwo, { onDelete: 'SET NULL' })
  public testsTwo: TestTableTwo[];
}
