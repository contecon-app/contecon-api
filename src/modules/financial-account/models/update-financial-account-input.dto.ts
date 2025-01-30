import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateFinancialAccountInput } from './create-financial-account-input.dto';

@InputType()
export class UpdateFinancialAccountInput extends PartialType(
  CreateFinancialAccountInput,
) {
  @Field(() => ID, { description: 'Financial account id' })
  id: string;
}
