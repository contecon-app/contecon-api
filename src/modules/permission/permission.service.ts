import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreatePermissionInputDto } from './models/create-permission-input.dto';
import { UpdatePermissionInputDto } from './models/update-permission-input.dto';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePermissionInputDto) {
    return this.prisma.permission.create({
      data,
    });
  }

  async update(data: UpdatePermissionInputDto) {
    return this.prisma.permission.update({
      where: { id: data.id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.permission.delete({
      where: { id },
    });
  }

  async getById(id: string) {
    return this.prisma.permission.findUnique({
      where: { id },
    });
  }

  async getAll() {
    return this.prisma.permission.findMany();
  }
}
