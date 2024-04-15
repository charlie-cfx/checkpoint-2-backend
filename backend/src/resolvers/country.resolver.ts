import { Arg, Mutation, Query, Resolver } from "type-graphql";
import * as CountryService from "../services/country.service";
import { Country } from "../entities/country";
import { CreateCountryInputType } from "../types/CreateCountryInputType";

@Resolver(Country)
export class CountryResolver {
    @Query(() => [Country])
    countries(): Promise<Country[]> {
        return CountryService.getAll();
    }

    @Query(() => Country)
    countryByCode(@Arg("code") code: string): Promise<Country | null> {
        return CountryService.getByCode(code);
    }

    @Mutation(() => Country)
    createCountry(
        @Arg("country") country: CreateCountryInputType
    ): Promise<Country> {
        return CountryService.create({ ...country });
    }
}
