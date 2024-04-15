import { Query, Resolver } from "type-graphql";
import * as CountryService from "../services/country.service";
import { Country } from "../entities/country";

@Resolver(Country)
export class CountryResolver {
    @Query(() => [Country])
    countries(): Promise<Country[]> {
        return CountryService.getAll();
    }
}
