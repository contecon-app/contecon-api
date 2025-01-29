import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateRoleInputDto } from './models/create-role-input.dto';
import { UpdateRoleInputDto } from './models/update-role-input.dto';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateRoleInputDto) {
    return this.prisma.role.create({
      data,
    });
  }

  async update(data: UpdateRoleInputDto) {
    const { id, ...rest } = data;

    return this.prisma.role.update({
      where: { id },
      data: rest,
    });
  }

  async delete(id: string) {
    return this.prisma.role.delete({
      where: { id },
    });
  }

  async getAll() {
    return this.prisma.role.findMany();
  }

  async getById(id: string) {
    return this.prisma.role.findUnique({
      where: { id },
    });
  }
}
