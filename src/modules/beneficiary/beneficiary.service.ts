import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateBeneficiaryInput } from './models/create-beneficiary-input.dto';
import { UpdateBeneficiaryInput } from './models/update-beneficiary-input.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BeneficiaryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, data: CreateBeneficiaryInput) {
    const { ...rest } = data;

    return this.prisma.beneficiary.create({
      data: {
        ...rest,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async update(id: string, data: UpdateBeneficiaryInput) {
    return this.prisma.beneficiary.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(userId: string, id: string) {
    return this.prisma.beneficiary.delete({
      where: { id, userId },
    });
  }

  async getAll(userId: string) {
    return this.prisma.beneficiary.findMany({
      where: { userId },
    });
  }

  async getById(userId: string, id: string) {
    return this.prisma.beneficiary.findMany({
      where: { id, userId },
    });
  }
}
