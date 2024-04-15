import { Country } from "../entities/country";

export function getAll(): Promise<Country[]> {
    return Country.find();
}
