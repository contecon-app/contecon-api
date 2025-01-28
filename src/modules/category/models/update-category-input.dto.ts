import { Field, ID, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category-input.dto';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field(() => ID, { description: 'ID of the category to update' })
  id: string;
}
