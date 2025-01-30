import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { BeneficiaryResolver } from './beneficiary.resolver';
import { BeneficiaryService } from './beneficiary.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [BeneficiaryService, BeneficiaryResolver],
})
export class BeneficiaryModule {}
