import {
  AllowNull,
  Column,
  DataType,
  HasMany,
  Table,
  Unique,
} from 'sequelize-typescript';

import ModelWithPk from './modelWithPk.model';
import MainProfile from './mainProfile.model';

@Table({
  tableName: 'manufacturers',
  underscored: true,
  charset: 'utf8mb4',
  collate: 'utf8mb4_bin',
  timestamps: false,
})
export default class Manufacturer extends ModelWithPk {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(50))
  name: string;

  @Unique
  @AllowNull(true)
  @Column(DataType.STRING(15))
  vinmonopoletId: string;

  @HasMany(() => MainProfile, 'manufacturer_id')
  mainProfiles: MainProfile[];
}
