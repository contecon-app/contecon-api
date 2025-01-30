import { Field, InputType } from '@nestjs/graphql';
import { CompensationTypeEnum } from '@prisma/client';

@InputType()
export class CreateInflowInput {
  @Field(() => String, { description: 'Inflow name' })
  name: string;

  @Field(() => String, { nullable: true, description: 'Inflow description' })
  description?: string;

  @Field(() => String, { description: 'Beneficiary ID' })
  beneficiaryId: string;

  @Field(() => String, { description: 'Financial account ID' })
  financialAccountId: string;

  @Field(() => Date, { description: 'Expiration date' })
  expirationDate: Date;

  @Field(() => Number, { description: 'Value' })
  value: number;

  @Field(() => Number, { description: 'Compensation' })
  compensation: number;

  @Field(() => String, { description: 'Category ID' })
  categoryId: string;

  @Field(() => String, { description: 'Cost center ID' })
  costCenterId: string;

  @Field(() => Date, { description: 'Emission date' })
  emissionDate: Date;

  @Field(() => CompensationTypeEnum, { description: 'Compensation type' })
  compesationType: CompensationTypeEnum;

  @Field(() => Number, { description: 'Installment number', defaultValue: 1 })
  installmentNumber: number;

  @Field(() => Number, { description: 'Installment value', defaultValue: 0 })
  installmentValue: number;
}
