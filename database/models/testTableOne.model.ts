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
  tableName: 'test_table_one',
  underscored: true,
  timestamps: false,
})
export default class TestTableOne extends ModelWithPk {
  @AllowNull(true)
  @Column(DataType.STRING)
  nameOne: string;

  @ForeignKey(() => TestTable)
  @Column
  testId: number;

  @BelongsTo(() => TestTable, {
    foreignKey: 'test_id',
    onDelete: 'CASCADE',
  })
  public testTable: TestTable;
}
