import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [PrismaModule],
  providers: [RoleService, RoleResolver],
})
export class RoleModule {}
