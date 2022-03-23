import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';

import Bottle from './bottle.model';
import Grape from './grapes.model';
import ModelWithPk from './modelWithPk.model';

@Table({
  tableName: 'bottles_grapes',
  underscored: true,
  timestamps: false,
})
export default class BottleGrape extends ModelWithPk {
  @AllowNull(true)
  @Column(DataType.TINYINT.UNSIGNED)
  percentage: number;

  @ForeignKey(() => Bottle)
  @Column
  bottleId: number;

  @BelongsTo(() => Bottle, 'bottle_id')
  bottle: Bottle;

  @ForeignKey(() => Grape)
  @Column
  grapeId: number;

  @BelongsTo(() => Grape, 'grape_id')
  grape: Grape;
}
