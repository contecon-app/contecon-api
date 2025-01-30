import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateRecurrenceInput } from './create-recurrence-input.dto';

@InputType()
export class UpdateRecurrenceInput extends PartialType(CreateRecurrenceInput) {
  @Field(() => ID, { description: 'Recurrence ID' })
  id: string;
}
