import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRoleInputDto {
  @Field(() => String, { description: 'The name of the role' })
  name: string;

  @Field(() => [ID], { description: 'The permissions of the role' })
  permissionsId: string[];
}
