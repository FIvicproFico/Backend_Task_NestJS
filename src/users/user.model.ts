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
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.UUID)
  uuid: string;

  @AllowNull(false)
  @Column(DataType.STRING(45))
  username: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  password: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  surname: string;

  @Unique(true)
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  role: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
