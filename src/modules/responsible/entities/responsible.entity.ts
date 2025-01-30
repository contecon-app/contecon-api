import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { DocumentTypeEnum } from '@prisma/client';
import { BaseEntity } from 'src/common/types/base.entity';

registerEnumType(DocumentTypeEnum, {
  name: 'DocumentTypeEnum',
  description: 'Document type enum',
});

@ObjectType()
export class Responsible extends BaseEntity {
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
