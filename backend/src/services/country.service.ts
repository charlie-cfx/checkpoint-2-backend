import { Continent } from "../entities/continent";
import { Country } from "../entities/country";

export function getAll(): Promise<Country[]> {
    return Country.find();
}

export function getByCode(code: string): Promise<Country | null> {
    return Country.findOne({ where: { code }, relations: { continent: true } });
}

export async function create(data: {
    code: string;
    name: string;
    emoji: string;
    continentCode: string;
}): Promise<Country> {
    const country = new Country(data);
    const continent = await Continent.findOneBy({ code: data.continentCode });

    if (continent) {
        country.continent = continent;
    }
    return country.save();
}
