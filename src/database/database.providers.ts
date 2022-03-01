import { Sequelize } from 'sequelize-typescript';

import env from '../config/env-config';
import { User } from '../users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      console.log(env);
      const sequelize = new Sequelize({
        dialect: env.dbDialect,
        host: env.dbHostname,
        port: env.dbPort,
        username: env.dbUsername,
        password: env.dbPassword,
        database: env.dbName,
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
