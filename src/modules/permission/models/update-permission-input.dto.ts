import { Field, PartialType } from '@nestjs/graphql';

import { InputType } from '@nestjs/graphql';
import { CreatePermissionInputDto } from './create-permission-input.dto';

@InputType()
export class UpdatePermissionInputDto extends PartialType(
  CreatePermissionInputDto,
) {
  @Field(() => String, { description: 'The id of the permission' })
  id: string;
}
