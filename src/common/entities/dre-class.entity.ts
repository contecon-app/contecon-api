import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DreClass {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
