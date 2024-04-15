import "reflect-metadata"
import { dataSource } from './config/db';
import { ApolloServer } from "apollo-server";

const port: number = 3001;

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CategoryResolver, AdResolver],
    validate: { forbidUnknownValues: false },
  });

  const server = new ApolloServer({
    schema,
  });

  try {
    const { url } = await server.listen({ port });
    console.log(`Server running at ${url}`);
    
  } catch(err) {
    console.error("Error starting the server");
  }
}

void start();