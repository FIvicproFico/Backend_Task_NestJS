import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';

// eslint-disable-next-line @typescript-eslint/ban-types
// abstract class ModelWithPk<T extends {} = {}, U extends {} = {}> extends Model<
//   T,
//   U
// > {
//   @PrimaryKey
//   @AutoIncrement
//   @AllowNull(false)
//   @Column(DataType.INTEGER)
//   id: number;
// }

abstract class ModelWithPk extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column(DataType.INTEGER)
  id: number;
}

export default ModelWithPk;
