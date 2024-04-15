import { Arg, Mutation, Query, Resolver } from "type-graphql";
import * as ContinentService from "../services/continent.service";
import { Continent } from "../entities/continent";
import { CreateContinentInputType } from "../types/CreateContinentInputType";

@Resolver(Continent)
export class ContinentResolver {
    @Query(() => [Continent])
    continents(): Promise<Continent[]> {
        return ContinentService.getAll();
    }

    @Query(() => Continent)
    continentByCode(@Arg("code") code: string): Promise<Continent | null> {
        return ContinentService.getByCode(code);
    }

    @Mutation(() => Continent)
    createContinent(
        @Arg("continent") continent: CreateContinentInputType
    ): Promise<Continent> {
        return ContinentService.create({ ...continent });
    }
}
