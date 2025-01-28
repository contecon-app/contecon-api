import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';

@Module({
  imports: [PrismaModule],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService],
})
export class CategoryModule {}
