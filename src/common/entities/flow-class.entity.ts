import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FlowClass {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}
