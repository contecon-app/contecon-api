import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { RecurrenceTypeEnum } from '@prisma/client';

registerEnumType(RecurrenceTypeEnum, {
  name: 'RecurrenceTypeEnum',
  description: 'Recurrence type enum',
});

@InputType()
export class CreateRecurrenceInput {
  @Field(() => String, { description: 'Recurrence name' })
  name: string;

  @Field(() => String, {
    nullable: true,
    description: 'Recurrence description',
  })
  description?: string;

  @Field(() => Number, { description: 'Recurrence value' })
  value: number;

  @Field(() => Number, { description: 'Recurrence percentage' })
  percentage: number;

  @Field(() => Date, { description: 'Start date' })
  startDate: Date;

  @Field(() => Date, { description: 'End date' })
  endDate: Date;

  @Field(() => String, { nullable: true, description: 'Payment document ID' })
  paymentDocumentId?: string;

  @Field(() => RecurrenceTypeEnum, {
    description: 'Recurrence type',
  })
  recurrenceType?: RecurrenceTypeEnum;

  @Field(() => ID, { description: 'Category ID' })
  categoryId: string;

  @Field(() => ID, { description: 'Cost center ID' })
  costCenterId: string;

  @Field(() => ID, { description: 'Financial account ID' })
  financialAccountId: string;

  @Field(() => ID, { description: 'Beneficiary ID' })
  beneficiaryId: string;
}
