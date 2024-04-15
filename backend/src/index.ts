import "reflect-metadata";
import { dataSource } from "./config/db";
import { ApolloServer } from "@apollo/server";
import { CountryResolver } from "./resolvers/country.resolver";
import { buildSchema } from "type-graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ContinentResolver } from "./resolvers/continent.resolver";

const port: number = 3001;

const start = async () => {
    await dataSource.initialize();

    const schema = await buildSchema({
        resolvers: [CountryResolver, ContinentResolver],
        validate: { forbidUnknownValues: false },
    });

    const server = new ApolloServer({
        schema,
    });

    try {
        const { url } = await startStandaloneServer(server, {
            listen: { port },
        });

        console.log(`🚀  Server ready at ${url}`);
    } catch (err) {
        console.error("Error starting the server");
    }
};

void start();
