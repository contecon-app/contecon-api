import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateCostCenterInput } from './models/create-cost-center-input.dto';
import { UpdateCostCenterInput } from './models/update-cost-center-input.dto';

@Injectable()
export class CostCenterService {
  constructor(private readonly prisma: PrismaService) {}

  async createCostCenter(userId: string, data: CreateCostCenterInput) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.costCenter.create({
      data: {
        ...data,
        user: {
          connect: { id: user.id },
        },
      },
    });
  }

  async updateCostCenter(userId: string, data: UpdateCostCenterInput) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.costCenter.update({
      where: { id: data.id },
      data,
    });
  }

  async deleteCostCenter(userId: string, id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.costCenter.delete({
      where: { id, userId: user.id },
    });
  }

  async getCostCenter(userId: string, id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.costCenter.findUnique({
      where: { id, userId: user.id },
    });
  }

  async getCostCenters(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.costCenter.findMany({
      where: { userId: user.id },
    });
  }
}
