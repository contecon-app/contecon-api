import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { BankTypeEnum } from '@prisma/client';
import { CreateResponsibleInput } from 'src/modules/responsible/models/create-responsible-input.dto';

registerEnumType(BankTypeEnum, {
  name: 'BankTypeEnum',
  description: 'Bank type',
});

@InputType()
export class CreateFinancialAccountInput {
  @Field(() => String, { description: 'Bank name' })
  bankName: string;

  @Field(() => String, { description: 'Bank agency' })
  agency: string;

  @Field(() => String, { description: 'Bank account' })
  account: string;

  @Field(() => BankTypeEnum, { description: 'Bank type' })
  type: BankTypeEnum;

  @Field(() => String, { description: 'Account name' })
  name: string;

  @Field(() => String, { description: 'Phone number' })
  phone: string;

  @Field(() => String, { description: 'Email address' })
  email: string;

  @Field(() => String, { nullable: true, description: 'Account description' })
  description?: string;

  @Field(() => Boolean, { description: 'Tax free status' })
  taxFree: boolean;

  @Field(() => Number, { description: 'Initial balance' })
  initialBalance: number;

  @Field(() => Number, { description: 'Credit limit' })
  creditLimit: number;

  @Field(() => Number, { description: 'Used credit limit' })
  usedCreditLimit: number;

  @Field(() => String, { nullable: true, description: 'Wallet information' })
  wallet?: string;

  @Field(() => String, { nullable: true, description: 'Variation information' })
  variation?: string;

  @Field(() => String, { nullable: true, description: 'Contract information' })
  contract?: string;

  @Field(() => String, { nullable: true, description: 'Emission cost' })
  emissionCost?: string;

  @Field(() => String, { nullable: true, description: 'Emission compensation' })
  emissionCompensation?: string;

  @Field(() => String, { nullable: true, description: 'Monthly compensation' })
  monthlyCompensation?: string;

  @Field(() => String, { nullable: true, description: 'Monthly interest' })
  monthlyInterest?: string;

  @Field(() => String, { nullable: true, description: 'Monthly fine' })
  monthlyFine?: string;

  @Field(() => CreateResponsibleInput, {
    description: 'Responsible entity',
  })
  responsible: CreateResponsibleInput;
}
