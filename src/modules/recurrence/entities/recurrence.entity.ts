import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { RecurrenceTypeEnum } from '@prisma/client';
import { BaseEntity } from 'src/common/types/base.entity';
import { PaymentDocument } from 'src/common/entities/payment-document.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { Category } from 'src/modules/category/entities/category.entity';
import { CostCenter } from 'src/modules/cost-center/entities/cost-center.entity';
import { FinancialAccount } from 'src/modules/financial-account/entities/financial-account.entity';
import { Beneficiary } from 'src/modules/beneficiary/entities/beneficiary.entity';

registerEnumType(RecurrenceTypeEnum, {
  name: 'RecurrenceTypeEnum',
  description: 'Recurrence type enum',
});

@ObjectType()
export class Recurrence extends BaseEntity {
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

  @Field(() => PaymentDocument, {
    nullable: true,
    description: 'Payment document',
  })
  paymentDocument?: PaymentDocument;

  @Field(() => RecurrenceTypeEnum, {
    nullable: true,
    description: 'Recurrence type',
  })
  recurrenceType?: RecurrenceTypeEnum;

  @Field(() => User, { description: 'User' })
  user: User;

  @Field(() => Category, { description: 'Category' })
  category: Category;

  @Field(() => CostCenter, { description: 'Cost center' })
  costCenter: CostCenter;

  @Field(() => FinancialAccount, { description: 'Financial account' })
  financialAccount: FinancialAccount;

  @Field(() => Beneficiary, { description: 'Beneficiary' })
  beneficiary: Beneficiary;
}
