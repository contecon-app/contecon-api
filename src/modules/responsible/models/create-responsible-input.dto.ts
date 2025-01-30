import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { DocumentTypeEnum } from '@prisma/client';

registerEnumType(DocumentTypeEnum, {
  name: 'DocumentTypeEnum',
  description: 'Document type enum',
});

@InputType()
export class CreateResponsibleInput {
  @Field(() => String, { description: 'Responsible name' })
  name: string;

  @Field(() => String, { description: 'Phone number' })
  phone: string;

  @Field(() => String, { description: 'Email address' })
  email: string;

  @Field(() => String, { description: 'Document number' })
  document: string;

  @Field(() => DocumentTypeEnum, { description: 'Document type' })
  documentType: DocumentTypeEnum;
}
