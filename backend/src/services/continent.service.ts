import { Continent } from "../entities/continent";

export function getAll(): Promise<Continent[]> {
    return Continent.find();
}

export function getByCode(code: string): Promise<Continent | null> {
    return Continent.findOne({ where: { code }, relations: { countries: true } });
}

export function create(data: {
    code: string;
    name: string;
}): Promise<Continent> {
    const continent = new Continent(data);
    return continent.save();
}
