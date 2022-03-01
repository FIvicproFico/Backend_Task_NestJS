import env from './env-config';
import { Dialect } from 'sequelize';

interface ISequelize {
  dialect: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const sequalizeConfig: ISequelize = {
  dialect: env.dbDialect,
  host: env.dbHostname,
  port: env.dbPort,
  username: env.dbUsername,
  password: env.dbPassword,
  database: env.dbName,
};

export default sequalizeConfig;
