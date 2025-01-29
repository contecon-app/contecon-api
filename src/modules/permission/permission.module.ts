import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { PermissionService } from './permission.service';
import { PermissionResolver } from './permission.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [PermissionService, PermissionResolver],
})
export class PermissionModule {}
