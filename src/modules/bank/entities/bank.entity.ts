import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BankTypeEnum } from '@prisma/client';
import { BaseEntity } from 'src/common/types/base.entity';

registerEnumType(BankTypeEnum, {
  name: 'BankTypeEnum',
  description: 'Bank type enum',
});

@ObjectType()
export class Bank extends BaseEntity {
  @Field(() => String, { description: 'Bank name' })
  name: string;

  @Field(() => String, { description: 'Bank agency' })
  agency: string;

  @Field(() => String, { description: 'Bank account' })
  account: string;

  @Field(() => BankTypeEnum, { description: 'Bank type' })
  type: BankTypeEnum;
}
