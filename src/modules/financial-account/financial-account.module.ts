import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { FinancialAccountService } from './financial-account.service';
import { FinancialAccountResolver } from './financial-account.resolver';

@Module({
  imports: [PrismaModule],
  providers: [FinancialAccountService, FinancialAccountResolver],
  exports: [FinancialAccountService],
})
export class FinancialAccountModule {}
