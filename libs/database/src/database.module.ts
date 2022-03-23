import { DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';

@Module({})
export class DatabaseModule {
  static register(dbConfig: SequelizeModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      imports: [
        SequelizeModule.forRoot({
          ...dbConfig,
          // models,
          synchronize: true,
          autoLoadModels: true,
          logging: true,
        }),
      ],
      exports: [SequelizeModule],
    };
  }
}
