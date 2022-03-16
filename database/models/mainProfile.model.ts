import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Table,
  Unique,
} from 'sequelize-typescript';

import Bottle from './bottle.model';
import Manufacturer from './manufacturer.model';
import ModelWithPk from './modelWithPk.model';
import Vintage from './vintage.model';

const indexedFields = ['name'];
@Table({
  tableName: 'main_profiles',
  underscored: true,
  indexes: indexedFields.map(fieldName => {
    return { fields: [fieldName] };
  }),
  charset: 'utf8mb4',
  collate: 'utf8mb4_bin',
  timestamps: false,
})
export default class MainProfile extends ModelWithPk {
  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @AllowNull(true)
  @Column(DataType.STRING(100))
  public livExName: string;

  @AllowNull(true)
  @Column(DataType.STRING(100))
  public vinName: string;

  @Unique
  @Column(DataType.STRING(10))
  public lwin: string;

  @ForeignKey(() => Manufacturer)
  @Column(DataType.INTEGER)
  public manufacturerId: number;

  @BelongsTo(() => Manufacturer, {
    foreignKey: 'manufacturer_id',
    onDelete: 'set null',
  })
  public manufacturer: Manufacturer;

  @HasMany(() => Vintage, 'main_profile_id')
  public vintages: Vintage[];

  @HasMany(() => Bottle, 'main_profile_id')
  public bottles: Bottle[];
}
