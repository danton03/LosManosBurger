-- AlterTable
ALTER TABLE "cities" ADD COLUMN     "addressesId" INTEGER;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_addressesId_fkey" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
