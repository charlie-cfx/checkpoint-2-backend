import { Field, InputType } from "type-graphql";

@InputType()
export class CreateContinentInputType {
    @Field()
    name: string;

    @Field()
    code: string;
}
