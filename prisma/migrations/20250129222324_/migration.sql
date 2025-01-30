/*
  Warnings:

  - Added the required column `updatedAt` to the `DreClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `FlowClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `PaymentDocument` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DreClass" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "FlowClass" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "PaymentDocument" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Inflow" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "beneficiaryId" TEXT NOT NULL,
    "financialAccountId" TEXT NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "compensation" DOUBLE PRECISION NOT NULL,
    "isCompensated" BOOLEAN NOT NULL DEFAULT false,
    "categoryId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "costCenterId" TEXT NOT NULL,
    "emissionDate" TIMESTAMP(3) NOT NULL,
    "compesationType" "CompensationTypeEnum" NOT NULL,
    "installmentNumber" INTEGER NOT NULL DEFAULT 1,
    "installmentValue" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Inflow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inflow" ADD CONSTRAINT "Inflow_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inflow" ADD CONSTRAINT "Inflow_financialAccountId_fkey" FOREIGN KEY ("financialAccountId") REFERENCES "FinancialAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inflow" ADD CONSTRAINT "Inflow_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inflow" ADD CONSTRAINT "Inflow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inflow" ADD CONSTRAINT "Inflow_costCenterId_fkey" FOREIGN KEY ("costCenterId") REFERENCES "CostCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
