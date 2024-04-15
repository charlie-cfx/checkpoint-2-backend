import { DataSource } from "typeorm";
import { Country } from "../entities/country";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./checkpoint-2.sqlite",
    entities: [Country],
    logging: true,
    synchronize: false,
    migrations: ["migrations/*.ts"],
});
