import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Table,
  Unique,
} from 'sequelize-typescript';

import Bottle from './bottle.model';
import BottleGrape from './bottleGrape.model';
import ModelWithPk from './modelWithPk.model';

@Table({
  tableName: 'grapes',
  underscored: true,
  timestamps: false,
})
export default class Grape extends ModelWithPk {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(50))
  name: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(50))
  vinmonopoletId: string;

  @BelongsToMany(() => Bottle, () => BottleGrape)
  bottles: Bottle[];

  @HasMany(() => BottleGrape, { foreignKey: 'grape_id', onDelete: 'CASCADE' })
  bottleGrape: BottleGrape[];
}
