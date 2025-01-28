import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCostCenterInput {
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
