import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCountryInputType {
    
    @Field()
    name: string;

    @Field()
    code: string;

    @Field()
    emoji: string;
}