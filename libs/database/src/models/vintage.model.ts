import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Min,
  Table,
} from 'sequelize-typescript';

import Bottle from './bottle.model';
import MainProfile from './mainProfile.model';
import ModelWithPk from './modelWithPk.model';

const indexedFields = ['vintage'];
@Table({
  tableName: 'vintages',
  underscored: true,
  indexes: indexedFields.map(fieldName => {
    return { fields: [fieldName] };
  }),
  timestamps: false,
})
export default class Vintage extends ModelWithPk {
  @AllowNull(true)
  @Min(0)
  @Column(DataType.SMALLINT.UNSIGNED)
  public vintage: number;

  @AllowNull(false)
  @ForeignKey(() => MainProfile)
  @Column(DataType.INTEGER)
  public mainProfileId: number;

  @BelongsTo(() => MainProfile, {
    foreignKey: 'main_profile_id',
    onDelete: 'CASCADE',
  })
  public mainProfile: MainProfile;

  @HasMany(() => Bottle, 'vintage_id')
  public bottles: Bottle[];
}
