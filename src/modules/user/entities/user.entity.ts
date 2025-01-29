import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../../common/types/base.entity';
import { Role } from 'src/modules/role/entities/role.entity';

@ObjectType()
export class User extends BaseEntity {
  @Field(() => String, { description: 'Name of the user' })
  name: string;

  @Field(() => String, { description: 'Email address of the user (unique)' })
  email: string;

  @Field(() => String, { description: 'Hashed password of the user' })
  password: string;

  @Field(() => Role, { description: 'Role of the user', nullable: true })
  role?: Role;
}
