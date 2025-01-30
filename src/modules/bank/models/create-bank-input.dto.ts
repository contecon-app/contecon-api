import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { BankTypeEnum } from '@prisma/client';

registerEnumType(BankTypeEnum, {
  name: 'BankTypeEnum',
  description: 'Bank type enum',
});

@InputType()
export class CreateBankInput {
  @Field(() => String, { description: 'Bank name' })
  name: string;

  @Field(() => String, { description: 'Bank agency' })
  agency: string;

  @Field(() => String, { description: 'Bank account' })
  account: string;

  @Field(() => BankTypeEnum, { description: 'Bank type' })
  type: BankTypeEnum;
}
