import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateRecurrenceInput } from './models/create-recurrence-input.dto';
import { UpdateRecurrenceInput } from './models/update-recurrence-input.dto';

@Injectable()
export class RecurrenceService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, data: CreateRecurrenceInput) {
    const {
      name,
      description,
      value,
      percentage,
      startDate,
      endDate,
      categoryId,
      costCenterId,
      financialAccountId,
      beneficiaryId,
    } = data;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.recurrence.create({
      data: {
        name,
        description,
        value,
        percentage,
        startDate,
        endDate,
        user: {
          connect: { id: userId },
        },
        category: {
          connect: { id: categoryId },
        },
        costCenter: {
          connect: { id: costCenterId },
        },
        financialAccount: {
          connect: { id: financialAccountId },
        },
        beneficiary: {
          connect: { id: beneficiaryId },
        },
      },
    });
  }

  async update(userId: string, data: UpdateRecurrenceInput) {
    const {
      id,
      categoryId,
      costCenterId,
      financialAccountId,
      beneficiaryId,
      paymentDocumentId,
      recurrenceType,
      ...rest
    } = data;

    return this.prisma.recurrence.update({
      where: { id, userId },
      data: {
        ...rest,
        recurrenceType,
        category: {
          connect: { id: categoryId },
        },
        costCenter: {
          connect: { id: costCenterId },
        },
        financialAccount: {
          connect: { id: financialAccountId },
        },
        beneficiary: {
          connect: { id: beneficiaryId },
        },
        paymentDocument: {
          connect: { id: paymentDocumentId },
        },
      },
    });
  }

  async delete(userId: string, id: string) {
    return this.prisma.recurrence.delete({
      where: { id, userId },
    });
  }

  async getAll(userId: string) {
    return this.prisma.recurrence.findMany({
      where: { userId },
    });
  }

  async getById(userId: string, id: string) {
    return this.prisma.recurrence.findUnique({
      where: { id, userId },
    });
  }
}
