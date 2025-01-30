import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateInflowInput } from './models/create-inflow-input.dto';
import { UpdateInflowInput } from './models/update-inflow-input.dto';

@Injectable()
export class InflowService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, data: CreateInflowInput) {
    const {
      beneficiaryId,
      categoryId,
      costCenterId,
      financialAccountId,
      ...rest
    } = data;

    const createInflowTransaction = await this.prisma.$transaction(
      async (tx) => {
        const createInflow = await tx.inflow.create({
          data: {
            ...rest,
            category: {
              connect: {
                id: categoryId,
              },
            },
            costCenter: {
              connect: {
                id: costCenterId,
              },
            },
            financialAccount: {
              connect: {
                id: financialAccountId,
              },
            },
            beneficiary: {
              connect: {
                id: beneficiaryId,
              },
            },
            user: {
              connect: {
                id: userId,
              },
            },
          },
        });

        return createInflow;
      },
    );

    return createInflowTransaction;
  }

  async update(userId: string, data: UpdateInflowInput) {
    const { id, ...rest } = data;

    return this.prisma.inflow.update({
      where: { id },
      data: rest,
    });
  }

  async delete(userId: string, id: string) {
    return this.prisma.inflow.delete({
      where: { id },
    });
  }

  async getById(userId: string, id: string) {
    return this.prisma.inflow.findUnique({
      where: { id },
    });
  }

  async getAll(userId: string) {
    return this.prisma.inflow.findMany({
      where: { userId },
    });
  }
}
