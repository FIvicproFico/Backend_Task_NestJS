import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Min,
  Table,
  Unique,
} from 'sequelize-typescript';

import Barcode from './barcode.model';
import BottleGrape from './bottleGrape.model';
import Grape from './grapes.model';
import MainProfile from './mainProfile.model';
import ModelWithPk from './modelWithPk.model';
import Vintage from './vintage.model';

const indexedFields = ['name', 'volume'];
@Table({
  tableName: 'bottles',
  underscored: true,
  indexes: indexedFields.map(fieldName => {
    return { fields: [fieldName] };
  }),
  charset: 'utf8mb4',
  collate: 'utf8mb4_bin',
  timestamps: false,
})
export default class Bottle extends ModelWithPk {
  @AllowNull(false)
  @Column(DataType.STRING)
  public name: string;

  @AllowNull(true)
  @Min(0)
  @Column(DataType.FLOAT)
  public volume: number;

  @AllowNull(true)
  @Min(0)
  @Column(DataType.FLOAT)
  public alcohol: number;

  @Default(null)
  @Column(DataType.STRING)
  public imageUrl: string;

  @Unique
  @Default(null)
  @AllowNull(true)
  @Column(DataType.STRING)
  public vinmonopoletId: string;

  @Unique
  @AllowNull(true)
  @Column(DataType.INTEGER)
  public vecturaId: number;

  @Unique
  @Default(null)
  @AllowNull(true)
  @Column(DataType.STRING)
  public vinmonopoletLink: string;

  @AllowNull(true)
  @Column(DataType.DATEONLY)
  public lastProvision: string;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  public isOnlineAvailable: boolean;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  public isAvailable: boolean;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  public isSpecial: boolean;

  @AllowNull(false)
  @Default(true)
  @Column(DataType.BOOLEAN)
  public isPublic: boolean;

  @AllowNull(true)
  @Column(DataType.STRING)
  public ingredients: string;

  @AllowNull(true)
  @Column(DataType.STRING(10))
  public sugar: string;

  @AllowNull(true)
  @Column(DataType.STRING(10))
  public acid: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public odour: string;

  @AllowNull(true)
  @Column(DataType.FLOAT)
  public horecaPrice: number;

  @AllowNull(true)
  @Column(DataType.STRING)
  public taste: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public colour: string;

  @AllowNull(true)
  @Column(DataType.STRING(50))
  public storingGrade: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  public productionMethod: string;

  @AllowNull(true)
  @Column(DataType.STRING(50))
  public packagingType: string;

  @AllowNull(true)
  @Column(DataType.STRING(30))
  public corkType: string;

  @AllowNull(true)
  @Column(DataType.STRING(50))
  public assortment: string;

  @AllowNull(true)
  @Column(DataType.STRING(50))
  public wholesalerName: string;

  @AllowNull(true)
  @Column(DataType.STRING(50))
  public carrier: string;

  @AllowNull(false)
  @ForeignKey(() => MainProfile)
  @Column(DataType.INTEGER)
  public mainProfileId: number;

  @BelongsTo(() => MainProfile, {
    foreignKey: 'main_profile_id',
    onDelete: 'CASCADE',
  })
  public mainProfile: MainProfile;

  @AllowNull(false)
  @ForeignKey(() => Vintage)
  @Column(DataType.INTEGER)
  public vintageId: number;

  @BelongsTo(() => Vintage, {
    foreignKey: 'vintage_id',
    onDelete: 'CASCADE',
  })
  public vintage: Vintage;

  @HasMany(() => Barcode, { foreignKey: 'bottle_id', onDelete: 'CASCADE' })
  public barcodes: Barcode[];

  @BelongsToMany(() => Grape, () => BottleGrape)
  public grapes: Grape[];

  @HasMany(() => BottleGrape, { foreignKey: 'bottle_id', onDelete: 'CASCADE' })
  bottleFood: BottleGrape[];
}
