import 'dotenv/config';

import { Dialect } from 'sequelize';

interface IEnv {
  accessTokenSecret: string;
  refreshTokenSecret: string;

  dbName: string;
  dbDialect: Dialect;
  dbUsername: string;
  dbPassword: string;
  dbHostname: string;
  dbPort: number;

  mailService: string;
  mailAddress: string;
  appSpecificPassword: string;

  mailSubject: string;
  mailFrom: string;

  admin: string;
}

const env: IEnv = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,

  dbName: process.env.DB_NAME,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbDialect: 'mysql',
  dbHostname: process.env.DB_HOSTNAME,
  dbPort: parseInt(process.env.DB_PORT),

  mailService: process.env.MAIL_SERVICE,
  mailAddress: process.env.MAIL_ADDRESS,
  appSpecificPassword: process.env.APPLICATION_SPECIFIC_PASSWORD,

  mailSubject: process.env.MAIL_SUBJECT,
  mailFrom: process.env.MAIL_FROM,

  admin: process.env.ADMIN,
};

export default env;
