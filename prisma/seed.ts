import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.flowClass.createMany({
    data: [
      {
        name: 'Entradas Operacionais',
      },
      {
        name: 'Saídas Operacionais',
      },
      {
        name: 'Investimentos',
      },
      {
        name: 'Resgate de Investimentos',
      },
      {
        name: 'Receitas Financeiras',
      },
      {
        name: 'Financiamentos',
      },
      {
        name: 'Pagamentos dos Financiamentos',
      },
      {
        name: 'Despesas Financeiras',
      },
      {
        name: 'Aporte dos Sócios',
      },
      {
        name: 'Pagamento aos sócios',
      },
      {
        name: 'Entrada de Tesouraria',
      },
      {
        name: 'Saída de Tesouraria',
      },
    ],
  });

  await prisma.dreClass.createMany({
    data: [
      {
        name: 'Receitas Operacionais',
      },
      {
        name: 'Receitas Financeiras',
      },
      {
        name: 'Despesas Financeiras',
      },
      {
        name: 'Despesas Variáveis',
      },
      {
        name: 'Despesas Fixas',
      },
      {
        name: 'Custos da Produção - CP',
      },
      {
        name: 'Custos da Mercadoria Vendida - CMV',
      },
      {
        name: 'Custos do Serviço Prestado - CSP',
      },
      {
        name: 'Impostos S/ Vendas',
      },
      {
        name: 'Impostos S/ Lucro',
      },
    ],
  });

  await prisma.paymentDocument.createMany({
    data: [
      {
        name: 'Nota Fiscal',
      },
      {
        name: 'Recibo',
      },
      {
        name: 'Boleto',
      },
      {
        name: 'Fatura',
      },
      {
        name: 'Duplicata',
      },
      {
        name: 'Ordem de Pagamento',
      },
    ],
  });

  await prisma.user.create({
    data: {
      name: 'Administrator',
      email: 'admin@contecon.com.br',
      password: await bcrypt.hash('Admin@123', 12),
    },
  });
}

main();
