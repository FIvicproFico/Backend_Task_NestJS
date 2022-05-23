import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';

import ModelWithPk from './modelWithPk.model';
import TestTable from './testTable.model';

@Table({
  tableName: 'test_table_two',
  underscored: true,
  timestamps: false,
})
export default class TestTableTwo extends ModelWithPk {
  @AllowNull(true)
  @Column(DataType.STRING)
  nameTwo: string;

  @ForeignKey(() => TestTable)
  @Column
  testId: number;

  @BelongsTo(() => TestTable)
  public testTable: TestTable;
}
