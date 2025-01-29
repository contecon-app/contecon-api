import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateRoleInputDto } from './create-role-input.dto';

@InputType()
export class UpdateRoleInputDto extends PartialType(CreateRoleInputDto) {
  @Field(() => ID, { description: 'The id of the role' })
  id: string;
}
