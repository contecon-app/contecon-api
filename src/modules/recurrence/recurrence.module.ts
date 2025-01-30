import { Module } from '@nestjs/common';
import { RecurrenceService } from './recurrence.service';
import { PrismaModule } from 'src/shared/database/prisma/prisma.module';
import { RecurrenceResolver } from './recurrence.resolver';

@Module({
  imports: [PrismaModule],
  providers: [RecurrenceService, RecurrenceResolver],
  exports: [RecurrenceService],
})
export class RecurrenceModule {}
