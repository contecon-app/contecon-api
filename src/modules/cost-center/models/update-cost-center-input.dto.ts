import { Field, InputType } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/types/base.entity';

@InputType()
export class UpdateCostCenterInput extends BaseEntity {
  @Field(() => String, { description: 'Cost center ID' })
  id: string;
}
