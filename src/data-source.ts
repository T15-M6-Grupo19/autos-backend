import { DataSource, DataSourceOptions, Repository } from "typeorm";
import path from "path";
import "dotenv/config";
import { User } from "./entities/users.entity";
import { Ad } from "./entities/ads.entity";


const settings = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationPath: string = path.join(__dirname, './migrations/**.{ts,js}');
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

const AppDataSource = new DataSource(settings());

const userRepository: Repository<User> = AppDataSource.getRepository(User)
const salesAdRepository: Repository<Ad> = AppDataSource.getRepository(Ad)



export { AppDataSource, userRepository, salesAdRepository };
