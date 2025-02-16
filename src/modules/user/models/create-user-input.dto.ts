import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name of the user' })
  name: string;

  @Field(() => String, { description: 'Email address of the user (unique)' })
  email: string;

  @Field(() => String, { description: 'Password of the user' })
  password: string;

  @Field(() => ID, { description: 'Role ID of the user' })
  roleId?: string;
}
