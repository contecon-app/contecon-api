import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateCostCenterInput } from './models/create-cost-center-input.dto';
import { UpdateCostCenterInput } from './models/update-cost-center-input.dto';

@Injectable()
export class CostCenterService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, data: CreateCostCenterInput) {
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

  async update(userId: string, data: UpdateCostCenterInput) {
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

  async delete(userId: string, id: string) {
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

  async getAll(userId: string, id: string) {
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

  async getById(userId: string) {
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
