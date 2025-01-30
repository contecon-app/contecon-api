import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/types/base.entity';

@ObjectType()
export class PaymentDocument extends BaseEntity {
  @Field(() => String, { description: 'Payment document name' })
  name: string;
}
