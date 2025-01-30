import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CompensationTypeEnum } from '@prisma/client';
import { BaseEntity } from 'src/common/types/base.entity';

registerEnumType(CompensationTypeEnum, {
  name: 'CompensationTypeEnum',
  description: 'Compensation type enum',
});

@ObjectType()
export class Inflow extends BaseEntity {
  @Field(() => String, { description: 'Inflow name' })
  name: string;

  @Field(() => String, { nullable: true, description: 'Inflow description' })
  description?: string;

  @Field(() => ID, { description: 'Beneficiary ID' })
  beneficiaryId: string;

  @Field(() => ID, { description: 'Financial account ID' })
  financialAccountId: string;

  @Field(() => Date, { description: 'Expiration date' })
  expirationDate: Date;

  @Field(() => Number, { description: 'Value' })
  value: number;

  @Field(() => Number, { description: 'Compensation' })
  compensation: number;

  @Field(() => Boolean, { description: 'Is compensated' })
  isCompensated: boolean;

  @Field(() => ID, { description: 'Category ID' })
  categoryId: string;

  @Field(() => ID, { description: 'User ID' })
  userId: string;

  @Field(() => ID, { description: 'Cost center ID' })
  costCenterId: string;

  @Field(() => Date, { description: 'Emission date' })
  emissionDate: Date;

  @Field(() => CompensationTypeEnum, { description: 'Compensation type' })
  compesationType: CompensationTypeEnum;

  @Field(() => Number, { description: 'Installment number' })
  installmentNumber: number;

  @Field(() => Number, { description: 'Installment value' })
  installmentValue: number;
}
