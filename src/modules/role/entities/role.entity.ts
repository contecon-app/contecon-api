import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity } from 'src/common/types/base.entity';
import { Permission } from 'src/modules/permission/entities/permission.entity';

@ObjectType()
export class Role extends BaseEntity {
  @Field(() => String, { description: 'The name of the role' })
  name: string;

  @Field(() => [Permission], { description: 'The permissions of the role' })
  permissions: Permission[];
}
