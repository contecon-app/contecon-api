import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BaseEntity {
  @Field(() => ID)
  id: string;

  @Field(() => Date)
  createdAt: string;

  @Field(() => Date)
  updatedAt: string;
}
