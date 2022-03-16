import {
  Table,
  Column,
  Model,
  UpdatedAt,
  CreatedAt,
  DataType,
  PrimaryKey,
  Unique,
  AutoIncrement,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'User',
})
export default class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.UUID)
  uuid: string;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  password: string;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  surname: string;

  @Unique(true)
  @AllowNull(false)
  @Column(DataType.STRING(45))
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  role: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
