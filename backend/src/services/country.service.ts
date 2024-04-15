import { Country } from "../entities/country";

export function getAll(): Promise<Country[]> {
    return Country.find();
}

export function create(data: { code: string; name: string; emoji: string }): Promise<Country> {
    const country = new Country(data);
    return country.save();
}