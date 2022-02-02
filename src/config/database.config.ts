import * as path from 'path';
import * as dotenv from 'dotenv';

// const env = process.env.NODE_ENV || 'dev';
// const dotenv_path = path.resolve(process.cwd(), `.${env}.env`);
// const result = dotenv.config({ path: dotenv_path });
// if (result.error) { /* do nothing */ }

function DatabaseConfigDTO(env) {
  switch (env) {
    case 'dev':
      return {
        name: 'default',
        type: 'mysql' as any,
        // driver: 'mysql',
        host: process.env.DATABASE_HOST_LOCAL,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER_LOCAL,
        password: process.env.DATABASE_PASSWORD_LOCAL,
        database: process.env.DATABASE_DB_LOCAL,
        synchronize: false,
        migrationsRun: false,
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrations: ["dist/migrations/**/*{.ts,.js}"],
        cli: { "migrationsDir": "src/migrations" }
      };
    case 'prod':
      return {
        name: 'default',
        type: 'postgres' as any,
        driver: 'postgres',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        database: process.env.DATABASE_DB,
        password: process.env.DATABASE_PASSWORD,
        synchronize: false,
        migrationsRun: false,
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrations: ["dist/migrations/**/*{.ts,.js}"],
        cli: { "migrationsDir": "src/migrations" }
      };
    default:
      return {
        name: 'default',
        type: 'postgres' as any,
        driver: 'postgres',
        host: process.env.DATABASE_HOST_LOCAL,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER_LOCAL,
        password: process.env.DATABASE_PASSWORD_LOCAL,
        database: process.env.DATABASE_DB_LOCAL,
        synchronize: false,
        migrationsRun: false,
        entities: ["dist/**/*.entity{.ts,.js}"],
        migrations: ["dist/migrations/**/*{.ts,.js}"],
        cli: { "migrationsDir": "src/migrations" }
      };
  }
}

export const DatabaseConfig = DatabaseConfigDTO(process.env.NODE_ENV)

export default DatabaseConfig;