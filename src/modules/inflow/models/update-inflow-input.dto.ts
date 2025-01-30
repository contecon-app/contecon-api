import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateInflowInput } from './create-inflow-input.dto';

@InputType()
export class UpdateInflowInput extends PartialType(CreateInflowInput) {
  @Field(() => ID, { description: 'Inflow ID' })
  id: string;
}
