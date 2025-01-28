import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { CostCenterResolver } from './cost-center.resolver';
import { CostCenterService } from './cost-center.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [CostCenterResolver, CostCenterService],
})
export class CostCenterModule {}
