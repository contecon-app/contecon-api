import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';

import { CategoryTypeEnum } from '@prisma/client';

registerEnumType(CategoryTypeEnum, {
  name: 'CategoryTypeEnum',
  description: 'Category type',
});

@InputType()
export class CreateCategoryInput {
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

  @Field(() => ID, { description: 'Flow class ID' })
  flowClassId: string;

  @Field(() => ID, { description: 'DRE class ID' })
  dreClassId: string;
}
