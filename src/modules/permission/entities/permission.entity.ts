import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity } from 'src/common/types/base.entity';

@ObjectType()
export class Permission extends BaseEntity {
  @Field(() => String, { description: 'The name of the permission' })
  name: string;
}
