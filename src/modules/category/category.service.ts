import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateCategoryInput } from './models/create-category-input.dto';
import { UpdateCategoryInput } from './models/update-category-input.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async createCategory(userId: string, data: CreateCategoryInput) {
    const {
      name,
      description,
      fatherId,
      type,
      deductible,
      flowClassId,
      dreClassId,
    } = data;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.category.create({
      data: {
        name,
        description,
        fatherId,
        type,
        deductible,
        flowClass: {
          connect: { id: flowClassId },
        },
        dreClass: {
          connect: { id: dreClassId },
        },
        user: {
          connect: { id: user.id },
        },
      },
    });
  }

  async updateCategory(userId: string, data: UpdateCategoryInput) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.category.update({
      where: { id: data.id },
      data,
    });
  }

  async deleteCategory(userId: string, id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.category.delete({
      where: { id, userId: user.id },
    });
  }

  async getCategory(userId: string, id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.category.findUnique({
      where: { id, userId: user.id },
    });
  }

  async getCategories(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return this.prisma.category.findMany({
      where: { userId: user.id },
    });
  }
}
