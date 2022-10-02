/*
  Warnings:

  - You are about to drop the column `addressesId` on the `cities` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cities" DROP CONSTRAINT "cities_addressesId_fkey";

-- AlterTable
ALTER TABLE "cities" DROP COLUMN "addressesId";
