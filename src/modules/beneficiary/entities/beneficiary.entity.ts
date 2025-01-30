import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BeneficiaryTypeEnum, DocumentTypeEnum } from '@prisma/client';
import { BaseEntity } from 'src/common/types/base.entity';

registerEnumType(BeneficiaryTypeEnum, {
  name: 'BeneficiaryTypeEnum',
  description: 'Beneficiary type enum',
});

registerEnumType(DocumentTypeEnum, {
  name: 'DocumentTypeEnum',
  description: 'Document type enum',
});

@ObjectType()
export class Beneficiary extends BaseEntity {
  @Field(() => String, { description: 'Beneficiary name' })
  name: string;

  @Field(() => String, { description: 'Beneficiary document' })
  document: string;

  @Field(() => DocumentTypeEnum, { description: 'Document type' })
  documentType: DocumentTypeEnum;

  @Field(() => BeneficiaryTypeEnum, { description: 'Beneficiary type' })
  type: BeneficiaryTypeEnum;

  @Field(() => String, { description: 'Beneficiary email' })
  email: string;

  @Field(() => String, { description: 'Beneficiary phone' })
  phone: string;

  @Field(() => String, { description: 'Beneficiary address' })
  address: string;

  @Field(() => String, { description: 'Beneficiary city' })
  city: string;

  @Field(() => String, { description: 'Beneficiary state' })
  state: string;

  @Field(() => String, { description: 'Beneficiary zip code' })
  zipCode: string;

  @Field(() => String, {
    description: 'Beneficiary description',
    nullable: true,
  })
  description?: string;
}
