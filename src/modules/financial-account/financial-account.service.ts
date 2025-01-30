import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma/prisma.service';
import { CreateFinancialAccountInput } from './models/create-financial-account-input.dto';
import { UpdateFinancialAccountInput } from './models/update-financial-account-input.dto';

@Injectable()
export class FinancialAccountService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFinancialAccountInput) {
    const { responsible, bankName, agency, account, type, ...rest } = data;

    const financialAccountTransaction = await this.prisma.$transaction(
      async (tx) => {
        const createBank = await this.prisma.bank.create({
          data: {
            name: bankName,
            agency,
            account,
            type,
          },
        });

        const financialAccount = await tx.financialAccount.create({
          data: {
            ...rest,
            responsible: {
              create: {
                ...responsible,
              },
            },
            bank: {
              connect: {
                id: createBank.id,
              },
            },
          },
        });

        return financialAccount;
      },
    );

    return financialAccountTransaction;
  }

  async update(id: string, data: UpdateFinancialAccountInput) {
    const { responsible, bankName, agency, account, type, ...rest } = data;

    const financialAccountTransaction = await this.prisma.$transaction(
      async (tx) => {
        let bankId: string | undefined;

        if (bankName || agency || account || type) {
          const bank = await tx.bank.update({
            where: {
              id: bankId,
            },
            data: {
              name: bankName,
              agency,
              account,
              type,
            },
          });
          bankId = bank.id;
        }

        const financialAccount = await tx.financialAccount.update({
          where: {
            id,
          },
          data: {
            ...rest,
            ...(responsible && {
              responsible: {
                update: {
                  ...responsible,
                },
              },
            }),
            ...(bankId && {
              bank: {
                connect: {
                  id: bankId,
                },
              },
            }),
          },
        });

        return financialAccount;
      },
    );

    return financialAccountTransaction;
  }

  async delete(id: string) {
    await this.prisma.financialAccount.delete({
      where: {
        id,
      },
    });
  }

  async getAll() {
    return this.prisma.financialAccount.findMany({
      include: {
        responsible: true,
        bank: true,
      },
    });
  }

  async getById(id: string) {
    return this.prisma.financialAccount.findUnique({
      where: {
        id,
      },
      include: {
        responsible: true,
        bank: true,
      },
    });
  }
}
