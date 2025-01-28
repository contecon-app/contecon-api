import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../../common/types/base.entity';

@ObjectType()
export class User extends BaseEntity {
  @Field(() => String, { description: 'Name of the user' })
  name: string;

  @Field(() => String, { description: 'Email address of the user (unique)' })
  email: string;

  @Field(() => String, { description: 'Hashed password of the user' })
  password: string;
}
