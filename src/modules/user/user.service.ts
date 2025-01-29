import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateUserInput } from './models/create-user-input.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserInput } from './models/update-user.input.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserInput) {
    const { name, email, password, roleId } = data;

    const hashedPassword = await bcrypt.hash(password, 12);

    const createUser = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: {
          connect: {
            id: roleId,
          },
        },
      },
    });

    return createUser;
  }

  async update(data: UpdateUserInput) {
    const { id, name, email, roleId } = data;

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        role: {
          connect: {
            id: roleId,
          },
        },
      },
    });

    return updatedUser;
  }

  async delete(id: string) {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  getAll() {
    return this.prisma.user.findMany();
  }

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  getCurrentUser(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }
}
