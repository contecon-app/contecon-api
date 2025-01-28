import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/types/base.entity';

@ObjectType()
export class CostCenter extends BaseEntity {
  @Field(() => Number, { description: 'Auto-incremented sequence number' })
  sequence: number;

  @Field(() => String, { description: 'Cost center name' })
  name: string;

  @Field(() => String, {
    nullable: true,
    description: 'Optional description of the cost center',
  })
  description?: string;

  @Field(() => String, {
    nullable: true,
    description: 'ID of the parent cost center',
  })
  fatherId?: string;
}
