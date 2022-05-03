import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class BottleCreateDto {
  @IsString()
  name: string;

  @IsNumber()
  volume?: number;

  @IsNumber()
  alcohol?: number;

  @IsString()
  imageUrl?: string;

  @IsString()
  @IsNotEmpty()
  vinmonopoletId?: string;

  @IsNumber()
  @IsNotEmpty()
  vecturaId?: number;

  @IsString()
  @IsNotEmpty()
  vinmonopoletLink?: string;

  @IsString()
  lastProvision?: string;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isOnlineAvailable: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isAvailable: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isSpecial: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isPublic: boolean;

  @IsString()
  ingredients?: string;

  @IsString()
  sugar?: string;

  @IsString()
  acid?: string;

  @IsString()
  odour?: string;

  @IsNumber()
  @IsOptional()
  horecaPrice?: number;

  @IsString()
  taste?: string;

  @IsString()
  colour?: string;

  @IsString()
  storingGrade?: string;

  @IsString()
  productionMethod?: string;

  @IsString()
  packagingType?: string;

  @IsString()
  corkType?: string;

  @IsString()
  assortment?: string;

  @IsString()
  wholesalerName?: string;

  @IsString()
  carrier?: string;

  @IsNumber()
  @IsOptional()
  mainProfileId: number;

  @IsNumber()
  @IsOptional()
  vintageId: number;
}
