import { Field, ObjectType } from '@nestjs/graphql';
import { DreClass } from 'src/common/entities/dre-class.entity';
import { FlowClass } from 'src/common/entities/flow-class.entity';
import { BaseEntity } from 'src/common/types/base.entity';
import { registerEnumType } from '@nestjs/graphql';
import { CategoryTypeEnum } from '@prisma/client';

registerEnumType(CategoryTypeEnum, {
  name: 'CategoryTypeEnum',
  description: 'Category type',
});

@ObjectType()
export class Category extends BaseEntity {
  @Field(() => Number, { description: 'Autoincrement sequence' })
  sequence: number;

  @Field(() => String, { description: 'Category name' })
  name: string;

  @Field(() => String, { nullable: true, description: 'Category description' })
  description?: string;

  @Field(() => String, { nullable: true, description: 'Category father id' })
  fatherId?: string;

  @Field(() => CategoryTypeEnum, { description: 'Category type' })
  type: CategoryTypeEnum;

  @Field(() => Boolean, { description: 'Category deductible' })
  deductible: boolean;

  @Field(() => String, { description: 'User id' })
  userId: string;

  @Field(() => FlowClass, { description: 'Flow class' })
  flowClass: FlowClass;

  @Field(() => DreClass, { description: 'Dre class' })
  dreClass: DreClass;
}
