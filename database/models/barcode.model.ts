import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Unique,
} from 'sequelize-typescript';

import Bottle from './bottle.model';
import ModelWithPk from './modelWithPk.model';

@Table({
  tableName: 'barcodes',
  underscored: true,
  indexes: [{ fields: ['gtin'] }],
  timestamps: false,
})
export default class Barcode extends ModelWithPk {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(20))
  gtin: string;

  @ForeignKey(() => Bottle)
  @Column
  bottleId: number;

  @BelongsTo(() => Bottle, 'bottle_id')
  bottle: Bottle;
}
