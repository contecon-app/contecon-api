import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateBeneficiaryInput } from './create-beneficiary-input.dto';

@InputType()
export class UpdateBeneficiaryInput extends PartialType(
  CreateBeneficiaryInput,
) {
  @Field(() => ID, { description: 'ID of the Beneficiary' })
  id: string;
}
