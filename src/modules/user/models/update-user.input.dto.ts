import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user-input.dto';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'ID of the user to update' })
  id: string;
}
