import { Field } from '@nestjs/graphql';

import { InputType } from '@nestjs/graphql';

@InputType()
export class CreatePermissionInputDto {
  @Field(() => String, { description: 'The name of the permission' })
  name: string;
}
